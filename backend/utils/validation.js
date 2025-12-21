const requireFields = (body, fields) => {
  const missing = fields.filter((field) => !body[field]);
  return missing;
};

module.exports = { requireFields };
