import { useState } from "react";
import BookTable from "../components/BookTable";
 
function Books({ books, setBooks }) {
  // One piece of state for each input box
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [isbn, setIsbn] = useState("");
  const [qty, setQty] = useState("");
 
  const [error, setError] = useState("");
 
  // null means we are adding a new book, a number means we are editing that book
  const [editIndex, setEditIndex] = useState(null);
 
  function clearForm() {
    setTitle("");
    setAuthor("");
    setGenre("");
    setIsbn("");
    setQty("");
    setError("");
    setEditIndex(null);
  }
 
  function handleSubmit(e) {
    e.preventDefault();
 
    // Validation
    if (title === "" || author === "" || genre === "" || isbn === "") {
      setError("Please fill in all the fields");
      return;
    }
    if (qty === "" || Number(qty) < 0) {
      setError("Quantity must be 0 or more");
      return;
    }
    for (let i = 0; i < books.length; i++) {
      if (books[i].isbn === isbn && i !== editIndex) {
        setError("A book with this ISBN already exists");
        return;
      }
    }
 
    const newBook = {
      title: title,
      author: author,
      genre: genre,
      isbn: isbn,
      qty: Number(qty),
    };
 
    if (editIndex === null) {
      // Add a new book
      setBooks([...books, newBook]);
    } else {
      // Update the book we are editing
      const updatedBooks = [...books];
      updatedBooks[editIndex] = newBook;
      setBooks(updatedBooks);
    }
 
    clearForm();
  }
 
  function handleEdit(index) {
    const book = books[index];
    setTitle(book.title);
    setAuthor(book.author);
    setGenre(book.genre);
    setIsbn(book.isbn);
    setQty(book.qty);
    setEditIndex(index);
    setError("");
  }
 
  function handleDelete(index) {
    if (window.confirm("Delete " + books[index].title + "?")) {
      const updatedBooks = books.filter((book, i) => i !== index);
      setBooks(updatedBooks);
      clearForm();
    }
  }
 
  return (
    <div>
      <h2>Book Management</h2>
 
      <div className="card">
        <h3>{editIndex === null ? "Add Book" : "Update Book"}</h3>
 
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <input
            type="text"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
 
          {error && <p className="error">{error}</p>}
 
          <button type="submit">{editIndex === null ? "Add Book" : "Save Changes"}</button>
          {editIndex !== null && (
            <button type="button" onClick={clearForm}>
              Cancel
            </button>
          )}
        </form>
      </div>
 
      <div className="card">
        <h3>All Books</h3>
        <BookTable books={books} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}
 
export default Books;