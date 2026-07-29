// src/components/AuthorView.tsx
import React from 'react';
import { useBooksByAuthor } from '../hooks/useBooksByAuthor';

interface AuthorViewProps {
  authorId: string;
}

const AuthorView: React.FC<AuthorViewProps> = ({ authorId }) => {
  const books = useBooksByAuthor(authorId);

  return (
    <div>
      <h1>Books by Author</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorView;
