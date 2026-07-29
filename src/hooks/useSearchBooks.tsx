// src/hooks/useSearchBooks.tsx
import React, { useState, useEffect } from 'react';
import { useBooks } from '../hooks/useBooks';

export default function useSearchBooks({ query = '' }) {
  const [books, setBooks] = useState([]);
  const allBooks = useBooks();

  useEffect(() => {
    const filteredBooks = allBooks.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    setBooks(filteredBooks);
  }, [query, allBooks]);

  return books;
}