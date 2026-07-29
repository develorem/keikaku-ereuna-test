import React from 'react';

interface Series {
  id: string;
  title: string;
  author: string;
}

const ViewSeries: React.FC<{ series: Series }> = ({ series }) => {
  return (
    <div className="series-container">
      <h2>{series.title}</h2>
      <p>Author: {series.author}</p>
    </div>
  );
};

export default ViewSeries;
