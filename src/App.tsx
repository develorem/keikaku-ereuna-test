// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LibraryFilter from './components/LibraryFilter';
import BookDetailPage from './pages/BookDetailPage';
import HomePage from './pages/HomePage';
import GroupsView from './components/GroupsView'; // Import GroupsView
import ViewSeries from './components/ViewSeries'; // Import ViewSeries
import AuthorView from './components/AuthorView'; // Import AuthorView

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
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/groups" element={<GroupsView />} /> // Add route for GroupsView
          <Route path="/series" element={<ViewSeries series={{ id: 1, title: 'Series Title', description: 'Series Description' }} />} /> // Add route for ViewSeries
          <Route path="/author/:id" element={<AuthorView authorId=":id" />} /> // Add route for AuthorView
        </Routes>
      </div>
    </Router>
  );
};

export default App;