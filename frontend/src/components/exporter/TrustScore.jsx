export default function TrustScore({ score }) {
  const safeScore = Number.isFinite(score) ? score : 0;
  const clampedScore = Math.min(100, Math.max(0, safeScore));
  const getChipClass = () => {
    if (safeScore > 70) return 'chip chip-delivered';
    if (safeScore > 40) return 'chip chip-shipped';
    return 'chip chip-pending';
  };

  return (
    <div className="stat-card">
      <span className="stat-title tooltip" data-tip="Score increases with evidence uploads (+10) and escrow releases (+20).">
        Trust score
      </span>
      <h3 className="stat-value">{clampedScore}</h3>
      <div className="card-muted">
        <div className="meter">
          <div className="meter-fill" style={{ width: `${clampedScore}%` }}></div>
        </div>
        <div className={getChipClass()}>{clampedScore}/100</div>
      </div>
    </div>
  );
}
