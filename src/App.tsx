// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LibraryFilter from './components/LibraryFilter';

const App: React.FC = () => {
  const handleFilter = (query: string) => {
    console.log('Filtering with query:', query);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Library</h1>
          <LibraryFilter onFilter={handleFilter} />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
