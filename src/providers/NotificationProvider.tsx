import { createContext, ReactNode, useCallback, useState } from 'react';
import { Notification } from '../models/notification';

interface Props {
  children?: ReactNode;
}

export interface NotificationContextProps {
  notification: Notification | null;
  addNotification: (notification: Notification) => void;
  removeNotification: () => void;
}

export const NotificationContext = createContext<NotificationContextProps>({
  notification: null,
  addNotification: () => {},
  removeNotification: () => {}
});

export default function NotificationProvider({ children }: Props): JSX.Element {
  const [notification, setNotification] = useState<Notification | null>(null);

  const removeNotification = () => {
    setNotification(null);
  };

  const addNotification = ({
    message,
    type = 'info',
    autoHideDuration = 8000
  }: Notification) => {
    setNotification({ message, type, autoHideDuration });
  };

  const contextValue = {
    notification,
    addNotification: useCallback(
      (notification: Notification) => addNotification(notification),
      []
    ),
    removeNotification: useCallback(() => removeNotification(), [])
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
}
