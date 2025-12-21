import { useContext, useState, useEffect } from 'react';
import { updateProfile, deleteUser } from '../../api/userApi';
import { AuthContext } from '../../context/AuthContext';

export default function AccountCard({ onToast }) {
  const { user, setUser, logout } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: user?.username || '',
    region: user?.region || '',
    productType: user?.productType || '',
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setForm({
      username: user?.username || '',
      region: user?.region || '',
      productType: user?.productType || '',
    });
  }, [user]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const { data } = await updateProfile(user._id || user.id, form);
      const updated = data.data ?? data;
      setUser(updated);
      onToast('Profile updated.', 'success');
    } catch (err) {
      onToast('Profile update failed.', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser(user._id || user.id);
      onToast('Account deleted.', 'success');
      await logout();
    } catch (err) {
      onToast('Account delete failed.', 'error');
    }
  };

  return (
    <div className="card">
      <h3 className="section-title">Account</h3>
      <div className="form">
        <input
          className="input"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          placeholder="Username"
        />
        {user?.role === 'exporter' && (
          <>
            <input
              className="input"
              value={form.region}
              onChange={(e) => setForm({ ...form, region: e.target.value })}
              placeholder="Region"
            />
            <input
              className="input"
              value={form.productType}
              onChange={(e) => setForm({ ...form, productType: e.target.value })}
              placeholder="Product type"
            />
          </>
        )}
        <button className="button button-primary" onClick={handleSave} disabled={saving}>
          {saving ? 'Saving...' : 'Save changes'}
        </button>
        <button className="button button-ghost" onClick={handleDelete}>
          Delete account
        </button>
      </div>
    </div>
  );
}
