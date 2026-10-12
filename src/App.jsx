import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Books from "./pages/Books.jsx";
import Transactions from "./pages/Transaction.jsx";
import Users from "./pages/Users.jsx";
import "./App.css";
 
// Get something from local storage, or use the default if nothing is saved yet
function getSaved(key, defaultValue) {
  const saved = localStorage.getItem(key);
  if (saved) {
    return JSON.parse(saved);
  }
  return defaultValue;
}
 
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
 
  const [books, setBooks] = useState(() =>
    getSaved("books", [
      { title: "LETONA'S GUIDE TO ANIME", author: "mzee mandla", genre: "Fantasy", isbn: "1111", qty: 3 },
      { title: "WISE OF GODS", author: "litsitso khaahloe", genre: "Fiction", isbn: "2222", qty: 1 },
      {title:"BASALI BA KAE",author:"manaheng ts'epo",genre:"self help",isbn:"1234",qty:4}
    ])
  );
  const [users, setUsers] = useState(() => getSaved("users", []));
  const [transactions, setTransactions] = useState(() => getSaved("transactions", []));
 
  // Save to local storage every time the data changes
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
 
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
 
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);
 
  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <h1>Community Library Management System</h1>
 
      <Routes>
        {/* If the user is not logged in, send them to the login page */}
        <Route
          path="/"
          element={
            loggedIn ? (
              <Dashboard books={books} users={users} />
            ) : (
              <Navigate to="/users" />
            )
          }
        />
        <Route
          path="/books"
          element={
            loggedIn ? (
              <Books books={books} setBooks={setBooks} />
            ) : (
              <Navigate to="/users" />
            )
          }
        />
        <Route
          path="/transactions"
          element={
            loggedIn ? (
              <Transactions
                books={books}
                setBooks={setBooks}
                transactions={transactions}
                setTransactions={setTransactions}
              />
            ) : (
              <Navigate to="/users" />
            )
          }
        />
        <Route
          path="/users"
          element={
            <Users
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              users={users}
              setUsers={setUsers}
            />
          }
        />
      </Routes>
    </div>
  );
}
 
export default App;