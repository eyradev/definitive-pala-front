import React, { ReactNode } from 'react';
import { DetailedNavbar, Footer } from '../../UI';

interface Props {
  children?: ReactNode;
}

export default function HomeLayout({ children }: Props): JSX.Element {
  return (
    <>
      <DetailedNavbar />
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
}
