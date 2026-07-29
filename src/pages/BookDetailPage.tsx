// src/pages/BookDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Book Detail Page</h1>
      <p>Book ID: {id}</p>
    </div>
  );
};

export default BookDetailPage;
