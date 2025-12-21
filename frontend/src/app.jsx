import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

// Components
import Navbar from './components/common/Navbar';
import ProtectedRoute from './components/common/ProtectedRoute';
import Loader from './components/common/Loader';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import ExporterDashboard from './pages/exporter/ExporterDashboard';
import BuyerDashboard from './pages/buyer/BuyerDashboard';

function App() {
  const { loading, user } = useContext(AuthContext);

  if (loading) return <Loader />;

  return (
    <Router>
      <div className="app-shell">
        <Navbar />
        <main className="page">
          <Routes>
          {/* Public Routes */}
          <Route path="/login" element={!user ? <Login /> : <Navigate to={user.role === 'buyer' ? '/buyer/dashboard' : '/exporter/dashboard'} />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

          {/* Protected Exporter Routes */}
          <Route 
            path="/exporter/dashboard" 
            element={
              <ProtectedRoute role="exporter">
                <ExporterDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Protected Buyer Routes */}
          <Route 
            path="/buyer/dashboard" 
            element={
              <ProtectedRoute role="buyer">
                <BuyerDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Default Redirects */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
