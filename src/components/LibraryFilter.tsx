// src/components/LibraryFilter.tsx
import React, { useState } from 'react';

interface LibraryFilterProps {
  onFilter: (query: string) => void;
}

const LibraryFilter: React.FC<LibraryFilterProps> = ({ onFilter }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onFilter(newQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search library..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default LibraryFilter;
