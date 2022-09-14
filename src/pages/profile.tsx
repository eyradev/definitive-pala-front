import { StandardLayout } from 'components/layout';
import Profile from 'components/UI/Profile/Profile';

export default function profile(): JSX.Element {
  return (
    <>
      <Profile />
    </>
  );
}

profile.Layout = StandardLayout;
