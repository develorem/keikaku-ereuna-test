// src/hooks/useNotify.tsx
import { useState } from 'react';

interface NotifyState {
  isOpen: boolean;
  message: string;
}

const useNotify = (): [() => void, (message: string) => void] => {
  const [state, setState] = useState<NotifyState>({ isOpen: false, message: '' });

  const openNotification = (message: string) => {
    setState({ isOpen: true, message });
  };

  const closeNotification = () => {
    setState({ isOpen: false, message: '' });
  };

  return [closeNotification, openNotification];
};

export default useNotify;
