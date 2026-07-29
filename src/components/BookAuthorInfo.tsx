import React from 'react';

interface BookAuthorInfoProps {
  author: string;
  bio?: string;
}

const BookAuthorInfo: React.FC<BookAuthorInfoProps> = ({ author, bio }) => {
  return (
    <div className="book-author-info">
      <h3>{author}</h3>
      {bio && <p>{bio}</p>}
    </div>
  );
};

export default BookAuthorInfo;
