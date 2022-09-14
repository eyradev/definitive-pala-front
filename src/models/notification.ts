import { ReactNode } from 'react';

export interface Notification {
  message: ReactNode;
  type: 'info' | 'danger' | 'success' | 'primary' | 'secondary';
  autoHideDuration?: number;
}
