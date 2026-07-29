// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LibraryFilter from './components/LibraryFilter';
import BookSearchPage from './pages/BookSearchPage';
import WantedBooksGroup from './components/WantedBooksGroup';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LibraryFilter />} />
        <Route path="/search" element={<BookSearchPage />} />
        <Route path="/wanted-books" element={<WantedBooksGroup />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;
