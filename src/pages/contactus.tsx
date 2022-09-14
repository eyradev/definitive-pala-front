import React from 'react';
import { StandardLayout } from 'components/layout';
import ContactUs from 'components/UI/ContactUs/ContactUs';

export default function contactus(): JSX.Element {
  return (
    <>
      <ContactUs />
    </>
  );
}

contactus.Layout = StandardLayout;
