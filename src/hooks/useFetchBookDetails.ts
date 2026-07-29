import { useState, useEffect } from 'react';

export function useFetchBookDetails(bookId: string) {
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch(`https://api.example.com/books/${bookId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBookDetails(data);
      } catch (err) {
        setError(err);
      }
    }

    fetchBook();
  }, [bookId]);

  return { bookDetails, error };
}
