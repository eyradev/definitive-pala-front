import { ReactNode } from 'react';
import { AutenticationNavbar } from '../../UI';

interface Props {
  children?: ReactNode;
}

export default function StandardLayout({ children }: Props): JSX.Element {
  return (
    <>
      <AutenticationNavbar />
      <div className="wrapper">{children}</div>
    </>
  );
}
