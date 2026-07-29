import { useState } from 'react';

export function useSortBooks(books: { id: string; title: string; author: string }[]): { sortedBooks: { id: string; title: string; author: string }[]; setBooks: (newBooks: { id: string; title: string; author: string }[]) => void } {
  const [sortedBooks, setSortedBooks] = useState(books);

  const sortBooks = () => {
    const sorted = [...books].sort((a, b) => a.title.localeCompare(b.title));
    setSortedBooks(sorted);
  };

  return { sortedBooks, setBooks: (newBooks) => { setSortedBooks(newBooks); sortBooks(); } };
}
