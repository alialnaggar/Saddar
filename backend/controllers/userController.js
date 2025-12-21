const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sendSuccess, sendError } = require('../utils/response');
const { requireFields } = require('../utils/validation');

// Helper to generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Helper to send token response
const sendTokenResponse = (user, statusCode, res) => {
  const token = generateToken(user._id);

  const options = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.cookie('token', token, options);
  return sendSuccess(res, {
    status: statusCode,
    message: 'Authenticated',
    data: {
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    },
  });
};

exports.registerUser = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body;
    const missing = requireFields(req.body, ['username', 'email', 'password', 'role']);
    if (missing.length) {
      return sendError(res, { status: 400, message: 'Missing required fields', errors: missing });
    }

    // Create user
    const user = await User.create({
      username,
      email,
      password,
      role,
    });

    sendTokenResponse(user, 201, res);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { username, email, password, role, region, productType } = req.body;
    const missing = requireFields(req.body, ['username', 'email', 'password', 'role']);
    if (missing.length) {
      return sendError(res, { status: 400, message: 'Missing required fields', errors: missing });
    }

    const createdUser = await User.create({
      username,
      email,
      password,
      role,
      region,
      productType,
    });
    const user = await User.findById(createdUser._id).select('-password');
    return sendSuccess(res, { status: 201, message: 'User created', data: user });
  } catch (err) {
    next(err);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate email & password
    const missing = requireFields(req.body, ['email', 'password']);
    if (missing.length) {
      return sendError(res, { status: 400, message: 'Missing required fields', errors: missing });
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return sendError(res, { status: 401, message: 'Invalid credentials' });
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return sendError(res, { status: 401, message: 'Invalid credentials' });
    }

    sendTokenResponse(user, 200, res);
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  return sendSuccess(res, { message: 'Logged out', data: {} });
};

exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    return sendSuccess(res, { data: user });
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.role) {
      filter.role = req.query.role;
    }
    const page = Number.parseInt(req.query.page, 10) || 1;
    const limit = Number.parseInt(req.query.limit, 10) || 10;
    const sort = req.query.sort || '-createdAt';
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      User.find(filter).select('-password').sort(sort).skip(skip).limit(limit),
      User.countDocuments(filter),
    ]);

    return sendSuccess(res, {
      data: users,
      meta: { page, limit, total, pages: Math.ceil(total / limit) || 1 },
    });
  } catch (err) { next(err); }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return sendError(res, { status: 404, message: 'User not found' });
    return sendSuccess(res, { data: user });
  } catch (err) { next(err); }
};

exports.updateUser = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin' && req.user.id !== req.params.id) {
      return sendError(res, { status: 403, message: 'Forbidden' });
    }
    if (req.body.password === '') delete req.body.password;
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).select('-password');
    return sendSuccess(res, { message: 'User updated', data: user });
  } catch (err) { next(err); }
};

exports.deleteUser = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin' && req.user.id !== req.params.id) {
      return sendError(res, { status: 403, message: 'Forbidden' });
    }
    await User.findByIdAndDelete(req.params.id);
    return sendSuccess(res, { message: 'User deleted' });
  } catch (err) { next(err); }
};
