// src/pages/BookSearchPage.tsx
import React from 'react';
import GeneralLayout from '../components/GeneralLayout';
import SearchForm from '../components/SearchForm';
import { useSearchBooks } from '../hooks/useSearchBooks';

export default function BookSearchPage() {
  const [query, setQuery] = useState('');
  const books = useSearchBooks(query);

  return (
    <GeneralLayout>
      <h1>Book Search</h1>
      <SearchForm onSearch={(q) => setQuery(q)} />
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </GeneralLayout>
  );
}