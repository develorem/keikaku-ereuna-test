import React from 'react';
import { useFetchBookDetails } from '../hooks/useFetchBookDetails';
import BookSeriesInfo from './BookSeriesInfo';

export default function BookDetails({ bookId }: { bookId: string }) {
  const { bookDetails, error } = useFetchBookDetails(bookId);

  if (error) return <div>Error: {error.message}</div>;
  if (!bookDetails) return <div>Loading...</div>;

  return (
    <div>
      <h2>{bookDetails.title}</h2>
      <p>Author: {bookDetails.author}</p>
      {bookDetails.series && bookDetails.relatedBooks && (
        <BookSeriesInfo seriesName={bookDetails.series} relatedBooks={bookDetails.relatedBooks} />
      )}
    </div>
  );
}