// One small box that shows a number and a label (used on the dashboard)
function StatCard({ number, label }) {
  return (
    <div className="card">
      <h3>{number}</h3>
      <p>{label}</p>
    </div>
  );
}
 
export default StatCard;