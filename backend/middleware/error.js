const { sendError } = require('../utils/response');

const errorHandler = (err, req, res, next) => {
  if (err.code === 11000) {
    return sendError(res, { status: 400, message: 'Duplicate value', errors: err.keyValue });
  }
  if (err.name === 'ValidationError') {
    const details = Object.values(err.errors).map((val) => val.message);
    return sendError(res, { status: 400, message: 'Validation error', errors: details });
  }
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const errors = process.env.NODE_ENV === 'production' ? undefined : err.stack;
  return sendError(res, { status: statusCode, message: err.message, errors });
};

module.exports = { errorHandler };
