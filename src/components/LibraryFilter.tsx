// src/components/LibraryFilter.tsx
import React, { useState } from 'react';

interface LibraryFilterProps {
  onFilter: (query: string) => void;
}

const LibraryFilter: React.FC<LibraryFilterProps> = ({ onFilter }) => {
  const [query, setQuery] = useState('');
  const [isWanted, setIsWanted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onFilter(newQuery);
  };

  const handleWantedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsWanted(event.target.checked);
    onFilter(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search library..."
        value={query}
        onChange={handleInputChange}
      />
      <label>
        <input
type="checkbox"
checked={isWanted}
onChange={handleWantedChange}
/>
        Wanted
      </label>
    </div>
  );
};

export default LibraryFilter;
