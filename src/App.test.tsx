// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import WantedBooksGroup from './components/WantedBooksGroup';
import useBooks from './hooks/useBooks';

jest.mock('./hooks/useBooks', () => {
  return jest.fn();
});

describe('WantedBooksGroup', () => {
  beforeEach(() => {
    (useBooks as jest.Mock).mockReturnValue([
      { id: '1', title: 'Wanted Book One', author: 'Author A' },
      { id: '2', title: 'Wanted Book Two', author: 'Author B' }
    ]);
  });

  it('renders wanted books correctly', () => {
    render(<WantedBooksGroup />);
    expect(screen.getByText('Wanted Books')).toBeInTheDocument();
    expect(screen.getByText('Wanted Book One by Author A')).toBeInTheDocument();
    expect(screen.getByText('Wanted Book Two by Author B')).toBeInTheDocument();
  });

  it('groups wanted books correctly', () => {
    render(<WantedBooksGroup />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(2);
    expect(listItems[0]).toHaveTextContent('Wanted Book One by Author A');
    expect(listItems[1]).toHaveTextContent('Wanted Book Two by Author B');
  });
});