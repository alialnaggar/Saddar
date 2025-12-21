import { useState } from 'react';
import { deleteEvidence, updateEvidence } from '../../api/evidenceApi';

export default function EvidenceList({ evidence, onRefresh, onToast }) {
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ fileUrl: '', notes: '' });

  const startEdit = (item) => {
    setEditingId(item._id);
    setForm({ fileUrl: item.fileUrl || '', notes: item.notes || '' });
  };

  const handleSave = async () => {
    try {
      await updateEvidence(editingId, form);
      onToast('Evidence updated.', 'success');
      setEditingId(null);
      onRefresh();
    } catch (err) {
      onToast('Evidence update failed.', 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEvidence(id);
      onToast('Evidence deleted.', 'success');
      onRefresh();
    } catch (err) {
      onToast('Evidence delete failed.', 'error');
    }
  };

  return (
    <div className="list">
      {evidence.length === 0 && (
        <div className="card-muted">No evidence uploaded yet.</div>
      )}
      {evidence.map((item) => (
        <div key={item._id} className="list-item">
          <div className="stack">
            <strong>{item.type}</strong>
            <span className="list-meta">{item.fileUrl}</span>
            {item.notes && <span className="list-meta">{item.notes}</span>}
          </div>
          {editingId === item._id ? (
            <div className="stack">
              <input
                className="input"
                value={form.fileUrl}
                onChange={(e) => setForm({ ...form, fileUrl: e.target.value })}
              />
              <input
                className="input"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Notes"
              />
              <button className="button button-primary" onClick={handleSave}>Save</button>
              <button className="button button-ghost" onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <div className="stack">
              <button className="button button-secondary" onClick={() => startEdit(item)}>Edit</button>
              <button className="button button-ghost" onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
