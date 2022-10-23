import { useContext, useEffect } from "react";
import {
  NotificationContext,
  NotificationContextProps,
} from "../providers/NotificationProvider/NotificationProvider";

export default function useNotification(): NotificationContextProps {
  const context = useContext<NotificationContextProps>(NotificationContext);
  useEffect(() => {
    if (!Object.keys(context).length)
      console.warn("Not in Notification context");
  }, [context]);

  return context;
}
