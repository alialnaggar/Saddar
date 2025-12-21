import { useState, useContext } from 'react';
import { createOrder } from '../../api/orderApi';
import { ToastContext } from '../../context/ToastContext';

export default function CreateOrderForm({ exporter, onClose, onSuccess }) {
  const [amount, setAmount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useContext(ToastContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (amount > 1000) {
      addToast('Max limit is $1000.', 'error');
      return;
    }
    setIsSubmitting(true);
    try {
      await createOrder({ exporterId: exporter._id, amount: Number(amount) });
      addToast('Order created.', 'success');
      onSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <form onSubmit={handleSubmit} className="modal">
        <h2 className="section-title">Order from {exporter.username}</h2>
        <label className="helper">Amount (USD - Max $1000)</label>
        <input
          type="number"
          max="1000"
          className="input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <div className="stack">
          <button type="button" onClick={onClose} className="button button-secondary">Cancel</button>
          <button type="submit" className="button button-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Creating...' : 'Confirm order'}
          </button>
        </div>
      </form>
    </div>
  );
}
