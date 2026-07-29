// src/components/LibraryDisplay.tsx
import React from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
}

const LibraryDisplay: React.FC = () => {
  const books: Book[] = [
    { id: "1", title: "Book One", author: "Author A" },
    { id: "2", title: "Book Two", author: "Author B" }
  ];

  const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <h2>Library</h2>
      <ul>
        {sortedBooks.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default LibraryDisplay;
