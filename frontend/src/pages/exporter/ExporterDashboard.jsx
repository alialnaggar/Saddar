import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getMyOrders, updateOrderStatus } from '../../api/orderApi';
import { getMyEvidence } from '../../api/evidenceApi';
import TrustScore from '../../components/exporter/TrustScore';
import EvidenceUpload from '../../components/exporter/EvidenceUpload';
import OrdersList from '../../components/exporter/OrderList';
import ProfileCard from '../../components/exporter/ProfileCard';
import EvidenceList from '../../components/exporter/EvidenceList';
import Skeleton from '../../components/common/Skeleton';
import { ToastContext } from '../../context/ToastContext';
import AccountCard from '../../components/common/AccountCard';

export default function ExporterDashboard() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [evidence, setEvidence] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToast } = useContext(ToastContext);

  const loadData = async () => {
    setLoading(true);
    try {
      const { data: ordersData } = await getMyOrders();
      const { data: evidenceData } = await getMyEvidence();
      setOrders(ordersData.data ?? ordersData);
      setEvidence(evidenceData.data ?? evidenceData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateOrderStatus(id, status);
      addToast('Order updated.', 'success');
      loadData();
    } catch (err) {
      addToast('Order update failed.', 'error');
    }
  };

  return (
    <div className="container">
      <div className="grid-3">
        <div className="stack">
          <TrustScore score={user?.trustScore} />
          <ProfileCard user={user} />
          <AccountCard onToast={addToast} />
          <div className="card">
            <h3 className="section-title">Raise trust score</h3>
            <p className="section-subtitle">Upload evidence for completed work.</p>
            <EvidenceUpload onSuccess={loadData} onToast={addToast} />
          </div>
          <div className="card">
            <h3 className="section-title">My evidence</h3>
            <p className="section-subtitle">Edit or remove your evidence files.</p>
            {loading ? (
              <Skeleton lines={3} />
            ) : (
              <EvidenceList evidence={evidence} onRefresh={loadData} onToast={addToast} />
            )}
          </div>
        </div>
        <div className="stack" style={{ gridColumn: 'span 2' }}>
          <div>
            <h2 className="section-title">Incoming orders</h2>
            <p className="section-subtitle">Move orders from pending to shipped as you dispatch.</p>
          </div>
          {loading ? <Skeleton lines={3} /> : <OrdersList orders={orders} onUpdate={handleStatusChange} />}
        </div>
      </div>
    </div>
  );
}
