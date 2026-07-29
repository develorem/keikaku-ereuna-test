// src/components/SearchForm.tsx
import React from 'react';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');
  const [showWanted, setShowWanted] = React.useState(false);

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSearch() }}>
      <input
type="text"
value={query}
onChange={(e) => setQuery(e.target.value)}
placeholder="Search books..." />
      <button type="submit">Search</button>
      <label>
        <input
type="checkbox"
checked={showWanted}
onChange={(e) => setShowWanted(e.target.checked)}
/>&nbsp;Show Wanted Books
      </label>
    </form>
  );
};

export default SearchForm;
