import "./KPICard.css";

export default function KPICard({ title, value }) {
  return (
    <div className="kpi-card">
      <span className="kpi-title">{title}</span>
      <span className="kpi-value">{value}</span>
    </div>
  );
}
