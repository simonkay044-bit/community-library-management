import StatCard from "../components/StatCard";
import BookTable from "../components/BookTable";
 
function Dashboard({ books, users }) {
  // Work out the numbers for the boxes at the top
  let totalCopies = 0;
  let lowCount = 0;
 
  for (let i = 0; i < books.length; i++) {
    totalCopies = totalCopies + books[i].qty;
    if (books[i].qty < 2) {
      lowCount = lowCount + 1;
    }
  }
 
  return (
    <div>
      <h2>Dashboard</h2>
 
      <div className="stats">
        <StatCard number={books.length} label="Total Books" />
        <StatCard number={totalCopies} label="Total Copies" />
        <StatCard number={users.length} label="Users" />
        <StatCard number={lowCount} label="Low Stock" />
      </div>
 
      <div className="card">
        <h3>Book Availability</h3>
        <p>Books with fewer than 2 copies are highlighted in red.</p>
        <BookTable books={books} />
      </div>
    </div>
  );
}
 
export default Dashboard;