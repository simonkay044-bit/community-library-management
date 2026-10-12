import { Link, useNavigate } from "react-router-dom";
 
function Navbar({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
 
  function handleLogout() {
    setLoggedIn(false);
    navigate("/users");
  }
 
  return (
    <nav className="navbar">
      <span className="brand">Community Library</span>
 
      {loggedIn ? (
        <div className="links">
          <Link to="/">Dashboard</Link>
          <Link to="/books">Books</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/users">Users</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="links">
          <Link to="/users">Login</Link>
        </div>
      )}
    </nav>
  );
}
 
export default Navbar;