const Order = require('../models/Order');
const { sendSuccess, sendError } = require('../utils/response');
const { requireFields } = require('../utils/validation');
const { applyTrustScore } = require('../utils/trustScoreCalculator');

const STATUS_TRANSITIONS = {
  pending: ['shipped'],
  shipped: ['delivered'],
  delivered: ['released'],
  released: [],
};

const canAccessOrder = (order, userId) => {
  return order.buyerId?.toString() === userId || order.exporterId?.toString() === userId;
};

exports.createOrder = async (req, res, next) => {
  try {
    const { exporterId, amount } = req.body;
    const missing = requireFields(req.body, ['exporterId', 'amount']);
    if (missing.length) {
      return sendError(res, { status: 400, message: 'Missing required fields', errors: missing });
    }
    if (req.user.role !== 'buyer') {
      return sendError(res, { status: 403, message: 'Only buyers can create orders' });
    }
    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      return sendError(res, { status: 400, message: 'Amount must be a positive number' });
    }
    if (numericAmount > 1000) return sendError(res, { status: 400, message: 'Order limit is $1000 USD' });

    const order = await Order.create({
      buyerId: req.user.id,
      exporterId,
      amount: numericAmount
    });
    return sendSuccess(res, { status: 201, message: 'Order created', data: order });
  } catch (err) { next(err); }
};

exports.getOrders = async (req, res, next) => {
  try {
    const filter = req.user.role === 'exporter' ? { exporterId: req.user.id } : { buyerId: req.user.id };
    const page = Number.parseInt(req.query.page, 10) || 1;
    const limit = Number.parseInt(req.query.limit, 10) || 10;
    const sort = req.query.sort || '-createdAt';
    const skip = (page - 1) * limit;

    const [orders, total] = await Promise.all([
      Order.find(filter).populate('buyerId exporterId', 'username email region').sort(sort).skip(skip).limit(limit),
      Order.countDocuments(filter),
    ]);

    return sendSuccess(res, {
      data: orders,
      meta: { page, limit, total, pages: Math.ceil(total / limit) || 1 },
    });
  } catch (err) { next(err); }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return sendError(res, { status: 404, message: 'Order not found' });
    if (!canAccessOrder(order, req.user.id)) {
      return sendError(res, { status: 403, message: 'Forbidden' });
    }
    return sendSuccess(res, { data: order });
  } catch (err) { next(err); }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!status) return sendError(res, { status: 400, message: 'Status is required' });
    const order = await Order.findById(req.params.id);
    if (!order) return sendError(res, { status: 404, message: 'Order not found' });
    if (!canAccessOrder(order, req.user.id)) {
      return sendError(res, { status: 403, message: 'Forbidden' });
    }

    const allowed = STATUS_TRANSITIONS[order.status] || [];
    if (!allowed.includes(status)) {
      return sendError(res, { status: 400, message: `Invalid status transition from ${order.status} to ${status}` });
    }

    if (status === 'shipped' && req.user.role !== 'exporter') {
      return sendError(res, { status: 403, message: 'Only exporters can mark shipped' });
    }
    if ((status === 'delivered' || status === 'released') && req.user.role !== 'buyer') {
      return sendError(res, { status: 403, message: 'Only buyers can confirm delivery or release escrow' });
    }

    order.status = status;
    if (status === 'released') {
      order.escrowStatus = 'released';
      await applyTrustScore(order.exporterId, 'order_released');
    }

    await order.save();
    return sendSuccess(res, { message: 'Order updated', data: order });
  } catch (err) { next(err); }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return sendError(res, { status: 404, message: 'Order not found' });
    if (!canAccessOrder(order, req.user.id)) {
      return sendError(res, { status: 403, message: 'Forbidden' });
    }
    await Order.findByIdAndDelete(req.params.id);
    return sendSuccess(res, { message: 'Order deleted' });
  } catch (err) { next(err); }
};
