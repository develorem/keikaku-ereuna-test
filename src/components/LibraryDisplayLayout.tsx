// src/components/LibraryDisplayLayout.tsx
import React from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
}

const LibraryDisplayLayout: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <ul>
      {books.sort((a, b) => a.title.localeCompare(b.title)).map((book) => (
        <li key={book.id}>{book.title} by {book.author}</li>
      ))}
    </ul>
  );
};

export default LibraryDisplayLayout;
