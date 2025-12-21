import { useContext } from 'react';
import { ToastContext } from '../../context/ToastContext';

export default function ToastContainer() {
  const { toasts } = useContext(ToastContext);

  if (!toasts.length) return null;

  return (
    <div className="toast-stack">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      ))}
    </div>
  );
}
