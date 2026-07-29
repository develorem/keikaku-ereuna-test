// src/hooks/useBooks.tsx
import React, { useState, useEffect } from 'react';
import booksData from '../data/books.json';

export default function useBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return books;
}