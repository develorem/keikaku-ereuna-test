// src/pages/HomePage.tsx
import React from 'react';
import { Button } from 'antd';
import useNotify from '../hooks/useNotify';
import NotificationModal from '../components/NotificationModal';

const HomePage: React.FC = () => {
  const [closeNotification, openNotification] = useNotify();

  const handleWantedClick = () => {
    openNotification('You have accessed the new Wanted filter feature!');
  };

  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <Button type="primary" onClick={handleWantedClick}>Access Wanted Filter</Button>
      <NotificationModal isOpen={true} onClose={closeNotification} message="You have accessed the new Wanted filter feature!" />
    </div>
  );
};

export default HomePage;
