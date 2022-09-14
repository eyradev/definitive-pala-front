import { StandardLayout } from 'components/layout';
import ForgotPassword from 'components/UI/ForgotPassword/ForgotPassword';

export default function forgotPassword(): JSX.Element {
  return (
    <div>
      <ForgotPassword />
    </div>
  );
}

forgotPassword.Layout = StandardLayout;
