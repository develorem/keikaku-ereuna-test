// src/pages/BookDetailPage.tsx
import React from 'react';
import GeneralLayout from '../components/GeneralLayout';
import BookCoverImage from '../components/BookCoverImage';
import BookAuthorInfo from '../components/BookAuthorInfo';
import GroupStructureInfo from '../components/GroupStructureInfo';
import ViewSeries from '../components/ViewSeries';

export default function BookDetailPage() {
  return (
    <GeneralLayout>
      <h1>Book Detail</h1>
      <BookCoverImage coverUrl="https://example.com/book-cover.jpg" />
      <BookAuthorInfo author="John Doe" bio="A great writer." />
      <ViewSeries series={{ id: '1', title: 'Example Series', author: 'Jane Doe' }} />
      <GroupStructureInfo bookDetails={{}} />
    </GeneralLayout>
  );
}
