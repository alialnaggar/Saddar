const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sendSuccess, sendError } = require('../utils/response');
const { requireFields } = require('../utils/validation');

exports.register = async (req, res, next) => {
  try {
    const { username, email, password, role, region, productType } = req.body;
    const missing = requireFields(req.body, ['username', 'email', 'password', 'role']);
    if (missing.length) {
      return sendError(res, { status: 400, message: 'Missing required fields', errors: missing });
    }
    const existing = await User.findOne({ email });
    if (existing) return sendError(res, { status: 400, message: 'User already exists' });

    const user = await User.create({
      username, email, password, role, region, productType
    });

    return sendSuccess(res, { status: 201, message: 'User registered successfully' });
  } catch (err) { next(err); }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const missing = requireFields(req.body, ['email', 'password']);
    if (missing.length) {
      return sendError(res, { status: 400, message: 'Missing required fields', errors: missing });
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 86400000 
      });
      return sendSuccess(res, {
        message: 'Authenticated',
        data: { user: { id: user._id, username: user.username, role: user.role, trustScore: user.trustScore } },
      });
    } else {
      return sendError(res, { status: 401, message: 'Invalid email or password' });
    }
  } catch (err) { next(err); }
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  return sendSuccess(res, { message: 'Logged out' });
};

exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    return sendSuccess(res, { data: user });
  } catch (err) { next(err); }
};
