import { StandardLayout } from 'components/layout';
import Signup from 'components/UI/Signup/Signup';

export default function signup(): JSX.Element {
  return (
    <>
      <Signup />
    </>
  );
}

signup.Layout = StandardLayout;
