// Shows the list of books in a table.
// The Dashboard uses it without buttons, the Books page passes onEdit and onDelete to show them.
function BookTable({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return <p>No books yet.</p>;
  }
 
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>ISBN</th>
          <th>Qty</th>
          <th>Status</th>
          {onEdit && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index} className={book.qty < 2 ? "low-row" : ""}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.isbn}</td>
            <td>{book.qty}</td>
            <td className={book.qty < 2 ? "low" : ""}>
              {book.qty < 2 ? "Low Stock" : "In Stock"}
            </td>
            {onEdit && (
              <td>
                <button onClick={() => onEdit(index)}>Update</button>{" "}
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
 
export default BookTable;