// src/pages/BookSearchPage.tsx
import React from 'react';
import GeneralLayout from '../components/GeneralLayout';
import SearchForm from '../components/SearchForm';
import LibraryDisplayLayout from '../components/LibraryDisplayLayout';
import { useSearchBooks } from '../hooks/useSearchBooks';

export default function BookSearchPage() {
  const [query, setQuery] = React.useState('');
  const books = useSearchBooks({ query });

  return (
    <GeneralLayout>
      <h1>Book Search</h1>
      <SearchForm onSearch={(q) => setQuery(q)} />
      <LibraryDisplayLayout books={books} />
    </GeneralLayout>
  );
}
