// src/hooks/useSearchBooks.ts
import { useState, useEffect } from 'react';

export function useSearchBooks(query) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch books based on the query
    if (query) {
      setTimeout(() => {
        setBooks([
          { id: '1', title: 'Book One', author: 'Author A' },
          { id: '2', title: 'Book Two', author: 'Author B' }
        ]);
      }, 500);
    } else {
      setBooks([]);
    }
  }, [query]);

  return books;
}