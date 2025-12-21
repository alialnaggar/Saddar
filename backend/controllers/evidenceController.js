const Evidence = require('../models/Evidence');
const { sendSuccess, sendError } = require('../utils/response');
const { requireFields } = require('../utils/validation');
const { applyTrustScore } = require('../utils/trustScoreCalculator');

exports.uploadEvidence = async (req, res, next) => {
  try {
    const { type, fileUrl, meta, notes } = req.body;
    const missing = requireFields(req.body, ['type', 'fileUrl']);
    if (missing.length) {
      return sendError(res, { status: 400, message: 'Missing required fields', errors: missing });
    }
    const evidence = await Evidence.create({ userId: req.user.id, type, fileUrl, meta, notes });
    await applyTrustScore(req.user.id, 'evidence_upload');
    return sendSuccess(res, { status: 201, message: 'Evidence uploaded', data: evidence });
  } catch (err) { next(err); }
};

exports.getEvidence = async (req, res, next) => {
  try {
    const evidence = await Evidence.find({ userId: req.user.id });
    return sendSuccess(res, { data: evidence });
  } catch (err) { next(err); }
};

exports.getEvidenceById = async (req, res, next) => {
  try {
    const evidence = await Evidence.findById(req.params.id);
    if (!evidence) return sendError(res, { status: 404, message: 'Evidence not found' });
    if (evidence.userId.toString() !== req.user.id) {
      return sendError(res, { status: 403, message: 'Forbidden' });
    }
    return sendSuccess(res, { data: evidence });
  } catch (err) { next(err); }
};

exports.updateEvidence = async (req, res, next) => {
  try {
    const evidence = await Evidence.findById(req.params.id);
    if (!evidence) return sendError(res, { status: 404, message: 'Evidence not found' });
    if (evidence.userId.toString() !== req.user.id) {
      return sendError(res, { status: 403, message: 'Forbidden' });
    }
    const updated = await Evidence.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    return sendSuccess(res, { message: 'Evidence updated', data: updated });
  } catch (err) { next(err); }
};

exports.deleteEvidence = async (req, res, next) => {
  try {
    const evidence = await Evidence.findById(req.params.id);
    if (!evidence) return sendError(res, { status: 404, message: 'Evidence not found' });
    if (evidence.userId.toString() !== req.user.id) {
      return sendError(res, { status: 403, message: 'Forbidden' });
    }
    await Evidence.findByIdAndDelete(req.params.id);
    return sendSuccess(res, { message: 'Evidence deleted' });
  } catch (err) { next(err); }
};
