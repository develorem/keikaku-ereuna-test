// src/hooks/useBooksByAuthor.tsx
import React, { useState, useEffect } from 'react';
import { useBooks } from '../hooks/useBooks';

export default function useBooksByAuthor(author: string) {
  const [books, setBooks] = useState([]);
  const allBooks = useBooks();

  useEffect(() => {
    const filteredBooks = allBooks.filter(book => book.author === author);
    setBooks(filteredBooks);
  }, [author, allBooks]);

  return books;
}