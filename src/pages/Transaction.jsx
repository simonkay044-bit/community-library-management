import { useState } from "react";
 
function Transactions({ books, setBooks, transactions, setTransactions }) {
  const [bookIndex, setBookIndex] = useState(0);
  const [type, setType] = useState("add");
  const [qty, setQty] = useState("");
  const [message, setMessage] = useState("");
 
  function handleSubmit(e) {
    e.preventDefault();
 
    const book = books[bookIndex];
    const amount = Number(qty);
 
    if (!book) {
      setMessage("Please choose a book");
      return;
    }
    if (amount <= 0) {
      setMessage("Please enter a valid quantity");
      return;
    }
    if (type === "borrow" && amount > book.qty) {
      setMessage("Not enough copies available");
      return;
    }
 
    // Change the quantity of the chosen book
    const updatedBooks = books.map((b, i) => {
      if (i === bookIndex) {
        if (type === "add") {
          return { ...b, qty: b.qty + amount };
        } else {
          return { ...b, qty: b.qty - amount };
        }
      }
      return b;
    });
    setBooks(updatedBooks);
 
    // Save the transaction in the history
    const newTransaction = {
      book: book.title,
      type: type,
      qty: amount,
      date: new Date().toLocaleDateString(),
    };
    setTransactions([...transactions, newTransaction]);
 
    setQty("");
    setMessage("Transaction complete");
  }
 
  // Newest transactions first
  const history = [...transactions].reverse();
 
  return (
    <div>
      <h2>Transactions</h2>
 
      <div className="card">
        <h3>Borrow / Add Stock</h3>
 
        <form onSubmit={handleSubmit}>
          <select value={bookIndex} onChange={(e) => setBookIndex(Number(e.target.value))}>
            {books.map((book, index) => (
              <option key={index} value={index}>
                {book.title} ({book.qty} in stock)
              </option>
            ))}
          </select>
 
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="add">Add Stock</option>
            <option value="borrow">Borrow Book</option>
          </select>
 
          <input
            type="number"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
 
          <button type="submit">Submit</button>
        </form>
 
        <p>{message}</p>
      </div>
 
      <div className="card">
        <h3>Transaction History</h3>
 
        {history.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Book</th>
                <th>Type</th>
                <th>Qty</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((t, index) => (
                <tr key={index}>
                  <td>{t.book}</td>
                  <td>{t.type === "add" ? "Add Stock" : "Borrow"}</td>
                  <td>{t.qty}</td>
                  <td>{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
 
export default Transactions;