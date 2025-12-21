import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/authApi';
import { ToastContext } from '../context/ToastContext';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '', role: 'exporter', region: '', productType: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      setIsSubmitting(true);
      await register(form);
      addToast('Account created. Please sign in.', 'success');
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please check the form and try again.');
      addToast('Registration failed. Try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-layout">
      <div className="auth-card fade-up">
        <div className="auth-panel">
          <h3 className="section-title">Create account</h3>
          <p className="section-subtitle">Set up your profile and start trading with escrow.</p>
          <form onSubmit={handleRegister} className="form">
            <input
              className="input"
              placeholder="Username"
              required
              onChange={e => setForm({...form, username: e.target.value})}
            />
            <input
              className="input"
              type="email"
              placeholder="Email"
              required
              onChange={e => setForm({...form, email: e.target.value})}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              required
              onChange={e => setForm({...form, password: e.target.value})}
            />
            <select
              className="select"
              value={form.role}
              onChange={e => setForm({...form, role: e.target.value})}
            >
              <option value="exporter">Exporter</option>
              <option value="buyer">Buyer</option>
            </select>
            {form.role === 'exporter' && (
              <>
                <input
                  className="input"
                  placeholder="Region (e.g. Cairo)"
                  onChange={e => setForm({...form, region: e.target.value})}
                />
                <input
                  className="input"
                  placeholder="Product type (e.g. Pottery)"
                  onChange={e => setForm({...form, productType: e.target.value})}
                />
              </>
            )}
            {error && <span className="helper">{error}</span>}
            <button className="button button-primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating account...' : 'Register'}
            </button>
          </form>
        </div>
        <div className="auth-splash">
          <span className="pill">Verified Trade Network</span>
          <h2 className="auth-title">Build trust with every delivery.</h2>
          <p className="section-subtitle">
            Track escrow releases, ship with confidence, and grow your credibility score.
          </p>
        </div>
      </div>
    </div>
  );
}
