import { useEffect, useState, useContext } from 'react';
import { getAllExporters } from '../../api/userApi';
import { getMyOrders, updateOrderStatus, deleteOrder } from '../../api/orderApi';
import ExporterCard from '../../components/buyer/ExporterCard';
import CreateOrderForm from '../../components/buyer/CreateOrderForm';
import Skeleton from '../../components/common/Skeleton';
import { ToastContext } from '../../context/ToastContext';
import AccountCard from '../../components/common/AccountCard';

export default function BuyerDashboard() {
  const [exporters, setExporters] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedExporter, setSelectedExporter] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useContext(ToastContext);

  const loadData = async () => {
    setLoading(true);
    try {
      const { data: exp } = await getAllExporters();
      const { data: ord } = await getMyOrders();
      setExporters(exp.data ?? exp);
      setOrders(ord.data ?? ord);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleRelease = async (id) => {
    try {
      await updateOrderStatus(id, 'released');
      addToast('Escrow released.', 'success');
      loadData();
    } catch (err) {
      addToast('Release failed.', 'error');
    }
  };

  const handleDelivered = async (id) => {
    try {
      await updateOrderStatus(id, 'delivered');
      addToast('Delivery confirmed.', 'success');
      loadData();
    } catch (err) {
      addToast('Delivery confirmation failed.', 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteOrder(id);
      addToast('Order deleted.', 'success');
      loadData();
    } catch (err) {
      addToast('Order delete failed.', 'error');
    }
  };

  const getStatusClass = (status) => {
    if (status === 'released') return 'chip chip-released';
    if (status === 'delivered') return 'chip chip-delivered';
    if (status === 'shipped') return 'chip chip-shipped';
    return 'chip chip-pending';
  };

  const statusSteps = ['pending', 'shipped', 'delivered', 'released'];

  return (
    <div className="container">
      <div className="split">
        <section>
          <h2 className="section-title">Discover exporters</h2>
          <p className="section-subtitle">Browse trusted producers and place escrow-backed orders.</p>
          <div className="list">
            {loading && (
              <>
                <Skeleton lines={3} />
                <Skeleton lines={3} />
              </>
            )}
            {!loading && exporters.length === 0 && (
              <div className="card-muted">No exporters yet. Try refreshing once more.</div>
            )}
            {!loading && exporters.map(e => (
              <ExporterCard key={e._id} exporter={e} onSelect={setSelectedExporter} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">My orders</h2>
          <p className="section-subtitle">Track delivery status and release escrow when complete.</p>
          <div className="list">
            {loading && (
              <>
                <Skeleton lines={3} />
                <Skeleton lines={3} />
              </>
            )}
            {!loading && orders.length === 0 && (
              <div className="card-muted">No orders yet. Select an exporter to get started.</div>
            )}
            {!loading && orders.map(o => (
              <div key={o._id} className="list-item">
                <div className="stack">
                  <div>
                    <strong>${o.amount}</strong> to {o.exporterId?.username}
                  </div>
                  <div className="list-meta">
                    Escrow: {o.escrowStatus}
                  </div>
                  <span className={getStatusClass(o.status)}>{o.status}</span>
                  <div className="status-stepper">
                    {statusSteps.map((step, index) => {
                      const active = statusSteps.indexOf(o.status) >= index;
                      return (
                        <span key={step} className={`step ${active ? 'step-active' : ''}`}>
                        <span className="step-dot"></span>
                        {step}
                      </span>
                      );
                    })}
                  </div>
                </div>
                <div className="stack">
                  {o.status === 'shipped' && (
                    <button onClick={() => handleDelivered(o._id)} className="button button-secondary">
                      Confirm delivery
                    </button>
                  )}
                  {o.status === 'delivered' && (
                    <button onClick={() => handleRelease(o._id)} className="button button-primary">
                      Release escrow
                    </button>
                  )}
                  {o.status === 'pending' && (
                    <button onClick={() => handleDelete(o._id)} className="button button-ghost">
                      Cancel order
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="stack" style={{ marginTop: '32px' }}>
        <AccountCard onToast={addToast} />
      </div>

      {selectedExporter && (
        <CreateOrderForm
          exporter={selectedExporter}
          onClose={() => setSelectedExporter(null)}
          onSuccess={() => { setSelectedExporter(null); loadData(); }}
        />
      )}
    </div>
  );
}
