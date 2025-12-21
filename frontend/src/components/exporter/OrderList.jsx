export default function OrdersList({ orders, onUpdate }) {
  const getStatusClass = (status) => {
    if (status === 'released') return 'chip chip-released';
    if (status === 'delivered') return 'chip chip-delivered';
    if (status === 'shipped') return 'chip chip-shipped';
    return 'chip chip-pending';
  };
  const statusSteps = ['pending', 'shipped', 'delivered', 'released'];

  return (
    <div className="list">
      {orders.length === 0 && (
        <div className="card-muted">No incoming orders yet.</div>
      )}
      {orders.map(order => (
        <div key={order._id} className="list-item">
          <div className="stack">
            <div>
              <strong>${order.amount}</strong> from {order.buyerId?.username || 'Buyer'}
            </div>
            <div className="list-meta">Escrow: {order.escrowStatus}</div>
            <span className={getStatusClass(order.status)}>{order.status}</span>
            <div className="status-stepper">
              {statusSteps.map((step, index) => {
                const active = statusSteps.indexOf(order.status) >= index;
                return (
                  <span key={step} className={`step ${active ? 'step-active' : ''}`}>
                  <span className="step-dot"></span>
                  {step}
                  </span>
                );
              })}
            </div>
          </div>
          {order.status === 'pending' && (
            <button
              onClick={() => onUpdate(order._id, 'shipped')}
              className="button button-primary"
            >
              Mark shipped
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
