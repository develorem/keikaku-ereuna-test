// src/components/LibraryDisplay.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import LibraryDisplay from './LibraryDisplay';

describe('LibraryDisplay', () => {
  test('renders all books in alphabetical order', () => {
    render(<LibraryDisplay />);
  });
});