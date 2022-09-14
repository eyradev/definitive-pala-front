import React from 'react';
import { StandardLayout } from 'components/layout';
import FaqForm from 'components/UI/FaqForm/FaqForm';

export default function FAQ(): JSX.Element {
  return (
    <>
      <FaqForm />
    </>
  );
}

FAQ.Layout = StandardLayout;
