import { AutenticationLayout } from 'components/layout';
import Login from 'components/UI/Login/Login';

export default function login(): JSX.Element {
  return (
    <>
      <Login />
    </>
  );
}

login.Layout = AutenticationLayout;
