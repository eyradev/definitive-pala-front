import { useContext } from 'react';
import {
  NotificationContext,
  NotificationContextProps
} from '../providers/NotificationProvider';

export default function useNotification(): NotificationContextProps {
  const { notification, addNotification, removeNotification } =
    useContext(NotificationContext);
  return { notification, addNotification, removeNotification };
}
