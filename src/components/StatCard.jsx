
function StatCard({ title, amount, icon, color, note }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <span>{title}</span>

        <div className={`stat-icon ${color}`}>
          {icon}
        </div>
      </div>

      <h2>{amount}</h2>
      <p className="stat-note">{note}</p>
    </div>
  );
}

export default StatCard;
