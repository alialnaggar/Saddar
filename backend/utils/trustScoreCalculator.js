const User = require('../models/User');

const TRUST_RULES = {
  evidence_upload: { points: 10, description: 'Evidence upload' },
  order_released: { points: 20, description: 'Order released' },
};

const applyTrustScore = async (userId, ruleKey) => {
  const rule = TRUST_RULES[ruleKey];
  if (!rule) throw new Error('Unknown trust score rule');
  return User.findByIdAndUpdate(
    userId,
    { $inc: { trustScore: rule.points } },
    { new: true }
  );
};

module.exports = { TRUST_RULES, applyTrustScore };
