// src/hooks/useSearchBooks.tsx
import React, { useState, useEffect } from 'react';
import { useFetchBooks } from '../hooks/useFetchBooks';

interface UseSearchBooksProps {
  query: string;
}

export const useSearchBooks = ({ query }: UseSearchBooksProps) => {
  const [books, setBooks] = useState([]);
  const allBooks = useFetchBooks();

  useEffect(() => {
    if (query === '') {
      setBooks(allBooks);
    } else {
      const filteredBooks = allBooks.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
      setBooks(filteredBooks);
    }
  }, [query, allBooks]);

  return books;
};
