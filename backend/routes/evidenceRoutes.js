const express = require('express');
const { uploadEvidence, getEvidence, getEvidenceById, updateEvidence, deleteEvidence } = require('../controllers/evidenceController');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, authorize('exporter'), uploadEvidence);
router.get('/', protect, authorize('exporter'), getEvidence);
router.get('/:id', protect, authorize('exporter'), getEvidenceById);
router.put('/:id', protect, authorize('exporter'), updateEvidence);
router.delete('/:id', protect, authorize('exporter'), deleteEvidence);

module.exports = router;
