import { useState, useEffect } from 'react';

export function useFetchBookDetails(bookId: string) {
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch('/data/books.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const book = data.find(book => book.id === bookId);
        setBookDetails(book);
      } catch (err) {
        setError(err);
      }
    }

    fetchBook();
  }, [bookId]);

  return { bookDetails, error };
}