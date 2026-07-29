// src/components/ResponsiveContainer.tsx
import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
