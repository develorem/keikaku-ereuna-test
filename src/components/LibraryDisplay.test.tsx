// src/components/LibraryDisplay.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import LibraryDisplay from './LibraryDisplay';

const books = [
  { id: "1", title: "Book One", author: "Author A" },
  { id: "2", title: "Book Two", author: "Author B" }
];

describe('LibraryDisplay', () => {
  test('renders all books in alphabetical order', () => {
    render(<LibraryDisplay />);
    const bookTitles = screen.getAllByText(/book/i);
    expect(bookTitles[0]).toHaveTextContent('Book One');
    expect(bookTitles[1]).toHaveTextContent('Book Two');
  });

  test('handles empty library', () => {
    render(<LibraryDisplay books={[]} />);
    const noBooksMessage = screen.getByText(/no books/i);
    expect(noBooksMessage).toBeInTheDocument();
  });

  test('handles single book', () => {
    render(<LibraryDisplay books={[books[0]]} />);
    const bookTitle = screen.getByText(/book one/i);
    expect(bookTitle).toBeInTheDocument();
  });
});