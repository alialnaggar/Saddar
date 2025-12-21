import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">SADDAR</Link>
        <div className="nav-actions">
        {user ? (
          <>
            <span className="pill">{user.username} · {user.role}</span>
            <Link
              to={user.role === 'buyer' ? '/buyer/dashboard' : '/exporter/dashboard'}
              className="button button-ghost"
            >
              Dashboard
            </Link>
            <button onClick={handleLogout} className="button button-secondary">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="button button-ghost">Login</Link>
            <Link to="/register" className="button button-primary">Register</Link>
          </>
        )}
        </div>
      </div>
    </nav>
  );
}
