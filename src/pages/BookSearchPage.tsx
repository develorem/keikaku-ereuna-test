// src/pages/BookSearchPage.tsx
import React from 'react';
import GeneralLayout from '../components/GeneralLayout';
import SearchForm from '../components/SearchForm';
import AddToLibraryButton from '../components/AddToLibraryButton';
import LibraryDisplayLayout from '../components/LibraryDisplayLayout'; // Import the new component
import { useSearchBooks } from '../hooks/useSearchBooks';

export default function BookSearchPage() {
  const [query, setQuery] = React.useState('');
  const books = useSearchBooks(query);

  return (
    <GeneralLayout>
      <h1>Book Search</h1>
      <SearchForm onSearch={(q) => setQuery(q)} />
      <LibraryDisplayLayout books={books} /> // Use the new component to display sorted books
      <AddToLibraryButton /> {/* Add the new button */}
    </GeneralLayout>
  );
}
