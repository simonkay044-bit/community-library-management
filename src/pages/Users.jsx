import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
function Users({ loggedIn, setLoggedIn, users, setUsers }) {
  const navigate = useNavigate();
 
  // Login form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
 
  // User form
  const [name, setName] = useState("");
  const [membershipId, setMembershipId] = useState("");
  const [role, setRole] = useState("member");
  const [userError, setUserError] = useState("");
  const [editIndex, setEditIndex] = useState(null);
 
  function handleLogin(e) {
    e.preventDefault();
 
    if (username === "khaahloe" && password === "1234567") {
      setLoggedIn(true);
      setLoginError("");
      setUsername("");
      setPassword("");
      navigate("/");
    } else {
      setLoginError("Wrong username or password");
    }
  }
 
  function clearUserForm() {
    setName("");
    setMembershipId("");
    setRole("member");
    setUserError("");
    setEditIndex(null);
  }
 
  function handleUserSubmit(e) {
    e.preventDefault();
 
    if (name === "" || membershipId === "") {
      setUserError("Please enter a name and membership ID");
      return;
    }
    for (let i = 0; i < users.length; i++) {
      if (users[i].membershipId === membershipId && i !== editIndex) {
        setUserError("This membership ID is already used");
        return;
      }
    }
 
    const newUser = { name: name, membershipId: membershipId, role: role };
 
    if (editIndex === null) {
      setUsers([...users, newUser]);
    } else {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = newUser;
      setUsers(updatedUsers);
    }
 
    clearUserForm();
  }
 
  function handleEdit(index) {
    setName(users[index].name);
    setMembershipId(users[index].membershipId);
    setRole(users[index].role);
    setEditIndex(index);
    setUserError("");
  }
 
  function handleDelete(index) {
    if (window.confirm("Delete " + users[index].name + "?")) {
      setUsers(users.filter((user, i) => i !== index));
      clearUserForm();
    }
  }
 
  // Not logged in: show the login form
  if (!loggedIn) {
    return (
      <div className="card">
        <h2>Login</h2>
 
        <form onSubmit={handleLogin}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
 
        {loginError && <p className="error">{loginError}</p>}
      </div>
    );
  }
 
  // Logged in: show user management
  return (
    <div>
      <h2>User Management</h2>
 
      <div className="card">
        <h3>{editIndex === null ? "Add User" : "Update User"}</h3>
 
        <form onSubmit={handleUserSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Membership ID"
            value={membershipId}
            onChange={(e) => setMembershipId(e.target.value)}
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="member">Member</option>
            <option value="librarian">Librarian</option>
            <option value="admin">Admin</option>
          </select>
 
          {userError && <p className="error">{userError}</p>}
 
          <button type="submit">{editIndex === null ? "Add User" : "Save Changes"}</button>
          {editIndex !== null && (
            <button type="button" onClick={clearUserForm}>
              Cancel
            </button>
          )}
        </form>
      </div>
 
      <div className="card">
        <h3>All Users</h3>
 
        {users.length === 0 ? (
          <p>No users yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Membership ID</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.membershipId}</td>
                  <td>{user.role}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Update</button>{" "}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
 
export default Users;