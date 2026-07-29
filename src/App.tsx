import React from 'react';
import GeneralLayout from './components/GeneralLayout';
import AddToLibraryButton from './components/AddToLibraryButton';
import BookDetails from './components/BookDetails';
import BookCoverImage from './components/BookCoverImage';
import BookAuthorInfo from './components/BookAuthorInfo';
import GroupStructureInfo from './components/GroupStructureInfo';
import ViewSeries from './components/ViewSeries';
import BookDetailPage from './pages/BookDetailPage'; // Import the new component

export default function App() {
  return (
    <GeneralLayout>
      <h1>It works</h1>
      <p>Scaffolded by Keikaku — replace this with the app.</p>
      <AddToLibraryButton />
      <BookDetails bookId="1" />
      <BookCoverImage coverUrl="https://example.com/book-cover.jpg" />
      <BookAuthorInfo author="John Doe" bio="A great writer." />
      <GroupStructureInfo bookDetails={{}} />
      <ViewSeries series={{ id: '1', title: 'Example Series', author: 'Jane Doe' }} />
      <BookDetailPage /> // Render the new component
    </GeneralLayout>
  );
}