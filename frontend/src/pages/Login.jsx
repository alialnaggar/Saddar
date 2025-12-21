import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ToastContext } from '../context/ToastContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useContext(AuthContext);
  const { addToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      const user = await login({ email, password });
      addToast('Welcome back!', 'success');
      navigate(user.role === 'buyer' ? '/buyer/dashboard' : '/exporter/dashboard');
    } catch (err) {
      setError('Login failed. Check your email and password.');
      addToast('Login failed. Check your credentials.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-layout">
      <div className="auth-card fade-up">
        <div className="auth-splash">
          <span className="pill">Trusted Trade Platform</span>
          <h2 className="auth-title">Welcome back to SADDAR.</h2>
          <p className="section-subtitle">
            Log in to manage escrow-backed orders and keep your trust score moving up.
          </p>
        </div>
        <div className="auth-panel">
          <h3 className="section-title">Sign in</h3>
          <p className="section-subtitle">Use your exporter or buyer credentials.</p>
          <form onSubmit={handleLogin} className="form">
            <input
              className="input"
              placeholder="Email address"
              type="email"
              required
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              required
              onChange={e => setPassword(e.target.value)}
            />
            {error && <span className="helper">{error}</span>}
            <button className="button button-primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          <p className="helper">
            New here? <Link to="/register"><strong>Create an account</strong></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
