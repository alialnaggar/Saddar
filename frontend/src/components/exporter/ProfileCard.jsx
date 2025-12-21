export default function ProfileCard({ user }) {
  return (
    <div className="card">
      <h3 className="section-title">Exporter profile</h3>
      <p><strong>Username:</strong> {user?.username}</p>
      <p><strong>Region:</strong> {user?.region || 'Not set'}</p>
      <p><strong>Product:</strong> {user?.productType || 'Not set'}</p>
    </div>
  );
}
