import { StandardLayout } from 'components/layout';
import PasswordReset from 'components/UI/PasswordReset/PasswordReset';

export default function passwordReset(): JSX.Element {
  return (
    <div>
      <PasswordReset />
    </div>
  );
}

passwordReset.Layout = StandardLayout;
