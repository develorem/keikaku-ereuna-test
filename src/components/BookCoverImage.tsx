import React from 'react';

interface BookDetails {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
}

export function BookCoverImage({ coverUrl }: { coverUrl?: string }) {
  if (!coverUrl) return null;
  return <img src={coverUrl} alt="Book Cover" />;
}

export default BookCoverImage;
