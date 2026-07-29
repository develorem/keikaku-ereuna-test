import React from 'react';

interface BookSeriesInfoProps {
  seriesName: string;
  relatedBooks: { id: string; title: string }[];
}

export default function BookSeriesInfo({ seriesName, relatedBooks }: BookSeriesInfoProps) {
  return (
    <div>
      <h3>Series Name: {seriesName}</h3>
      <ul>
        {relatedBooks.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}