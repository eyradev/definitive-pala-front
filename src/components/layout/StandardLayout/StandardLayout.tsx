import { ReactNode } from 'react';
import { Footer, StandardNavbar } from '../../UI';

interface Props {
  children?: ReactNode;
}

export default function StandardLayout({ children }: Props): JSX.Element {
  return (
    <>
      <StandardNavbar />
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
}
