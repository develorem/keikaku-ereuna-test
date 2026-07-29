// src/components/WantedBooksGroup.tsx
import React from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
}

const WantedBooksGroup: React.FC = () => {
  const books: Book[] = [
    { id: "1", title: "Wanted Book One", author: "Author A" },
    { id: "2", title: "Wanted Book Two", author: "Author B" }
  ];

  const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <h3>Wanted Books</h3>
      <ul>
        {sortedBooks.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default WantedBooksGroup;
