import React from 'react';
import { Alert } from 'reactstrap';
import useNotification from '../../../hooks/useNotification';

export default function Notification(): JSX.Element | null {
  const { notification, removeNotification } = useNotification();

  if (!notification) return null;
  setTimeout(() => {
    removeNotification();
  }, notification.autoHideDuration);
  return (
    <Alert
      color={notification.type}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        width: 'max(min(30vw, 300px), 260px)',
        bottom: 0,
        right: 'calc(50% - max(min(15vw, 150px), 130px))',
        zIndex: 10
      }}
    >
      <div>{notification.message}</div>
      <div onClick={removeNotification}>
        <i className="now-ui-icons ui-1_simple-remove" />
      </div>
    </Alert>
  );
}
