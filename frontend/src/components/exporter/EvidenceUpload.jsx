import { useState } from 'react';
import { uploadEvidence } from '../../api/evidenceApi';

export default function EvidenceUpload({ onSuccess, onToast }) {
  const [formData, setFormData] = useState({ type: 'photo', fileUrl: '', notes: '' });

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      await uploadEvidence(formData);
      if (onToast) onToast('Evidence uploaded.', 'success');
      onSuccess();
      setFormData({ ...formData, fileUrl: '', notes: '' });
    } catch (err) {
      if (onToast) onToast('Evidence upload failed.', 'error');
    }
  };

  return (
    <form onSubmit={handleUpload} className="form">
      <select
        className="select"
        value={formData.type}
        onChange={(e) => setFormData({...formData, type: e.target.value})}
      >
        <option value="photo">Product Photo</option>
        <option value="receipt">Shipping Receipt</option>
        <option value="review">Client Review</option>
      </select>
      <input
        className="input"
        placeholder="Evidence URL/Link"
        value={formData.fileUrl}
        onChange={(e) => setFormData({...formData, fileUrl: e.target.value})}
        required
      />
      <input
        className="input"
        placeholder="Notes (optional)"
        value={formData.notes}
        onChange={(e) => setFormData({...formData, notes: e.target.value})}
      />
      <button className="button button-primary" type="submit">Upload (+10 points)</button>
    </form>
  );
}
