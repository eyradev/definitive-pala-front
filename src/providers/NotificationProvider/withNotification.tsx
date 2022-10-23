/* eslint-disable react/display-name */
import { ComponentType } from "react";
import NotificationProvider from "./NotificationProvider";

const withNotification =
  <P extends object>(Component: ComponentType<P>): React.FC<P> =>
  (props) =>
    (
      <NotificationProvider>
        <Component {...(props as P)} />
      </NotificationProvider>
    );

export default withNotification;
