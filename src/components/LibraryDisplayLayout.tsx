// src/components/LibraryDisplayLayout.tsx
import React from 'react';
import { useMediaQuery } from '@mui/material';

interface LibraryDisplayProps {
  books: any[];
}

const LibraryDisplayLayout: React.FC<LibraryDisplayProps> = ({ books }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {books.map((book, index) => (
        <div key={index} style={{ margin: isMobile ? '10px' : '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default LibraryDisplayLayout;
