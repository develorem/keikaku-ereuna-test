import React from 'react';
import GeneralLayout from './components/GeneralLayout';
import AddToLibraryButton from './components/AddToLibraryButton';
import BookDetails from './components/BookDetails';
import BookCoverImage from './components/BookCoverImage'; // Import the component
import BookAuthorInfo from './components/BookAuthorInfo'; // Import the new component
import GroupStructureInfo from './components/GroupStructureInfo'; // Add this line to import the new component
import ViewSeries from './components/ViewSeries'; // Import the new component

export default function App() {
  return (
    <GeneralLayout>
      <h1>It works</h1>
      <p>Scaffolded by Keikaku — replace this with the app.</p>
      <AddToLibraryButton />
      <BookDetails bookId="1" />
      <BookCoverImage coverUrl="https://example.com/book-cover.jpg" /> // Render the component
      <BookAuthorInfo author="John Doe" bio="A great writer." /> // Add the new component with props
      <GroupStructureInfo bookDetails={{}} /> // Add this line to render the new component
      <ViewSeries series={{ id: '1', title: 'Example Series', author: 'Jane Doe' }} /> // Render the new component
    </GeneralLayout>
  );
}