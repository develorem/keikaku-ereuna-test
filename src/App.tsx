// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LibraryFilter from './components/LibraryFilter';
import BookSearchPage from './pages/BookSearchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LibraryFilter />} />
        <Route path="/search" element={<BookSearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;