export default function ExporterCard({ exporter, onSelect }) {
  return (
    <div className="list-item">
      <div className="stack">
        <h3 className="section-title" style={{ fontSize: '18px' }}>{exporter.username}</h3>
        <p className="list-meta">{exporter.region || 'Region TBD'} • {exporter.productType || 'Product TBD'}</p>
        <span className="chip chip-delivered">Score: {exporter.trustScore}</span>
      </div>
      <button
        onClick={() => onSelect(exporter)}
        className="button button-primary"
      >
        Create order
      </button>
    </div>
  );
}
