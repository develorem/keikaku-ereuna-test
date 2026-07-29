// src/pages/BookDetailPage.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import BookDetailPage from './BookDetailPage';
import useFetchBookDetails from '../hooks/useFetchBookDetails';
import { useMockedHook } from '../../utils/testUtils';

jest.mock('../hooks/useFetchBookDetails');

describe('BookDetailPage', () => {
  it('renders book details with valid data', async () => {
    const mockData = {
      id: '1',
      title: 'Book One',
      author: 'Author A'
    };
    useMockedHook(useFetchBookDetails, { bookDetails: mockData, error: null });

    render(<BookDetailPage />);

    expect(screen.getByText('Book Detail Page')).toBeInTheDocument();
    expect(screen.getByText('Book ID: 1')).toBeInTheDocument();
    expect(screen.getByText('Title: Book One')).toBeInTheDocument();
    expect(screen.getByText('Author: Author A')).toBeInTheDocument();
  });

  it('handles errors gracefully if book data is not available', async () => {
    useMockedHook(useFetchBookDetails, { bookDetails: null, error: new Error('Network response was not ok') });

    render(<BookDetailPage />);

    expect(screen.getByText('Error: Network response was not ok')).toBeInTheDocument();
  });
});