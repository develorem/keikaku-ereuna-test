// src/components/ViewSeries.tsx
import React from 'react';

interface Series {
  id: number;
  title: string;
  description: string;
}

const ViewSeries: React.FC<{ series: Series }> = ({ series }) => {
  return (
    <div className="view-series">
      <h1>{series.title}</h1>
      <p>{series.description}</p>
    </div>
  );
};

export default ViewSeries;
