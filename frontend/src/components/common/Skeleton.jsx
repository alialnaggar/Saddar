export default function Skeleton({ lines = 2 }) {
  return (
    <div className="card-muted">
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="skeleton skeleton-line"></div>
      ))}
    </div>
  );
}
