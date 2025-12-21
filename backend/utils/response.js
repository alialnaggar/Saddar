const sendSuccess = (res, { status = 200, data = null, message = 'OK', meta = undefined } = {}) => {
  const payload = { success: true, message, data };
  if (meta !== undefined) payload.meta = meta;
  return res.status(status).json(payload);
};

const sendError = (res, { status = 500, message = 'Server Error', errors = undefined } = {}) => {
  const payload = { success: false, message };
  if (errors !== undefined) payload.errors = errors;
  return res.status(status).json(payload);
};

module.exports = { sendSuccess, sendError };
