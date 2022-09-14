import React from 'react';
import { StandardLayout } from 'components/layout';
import WorkWithUs from 'components/UI/WorkWithUs/WorkWithUs';

export default function workwithus(): JSX.Element {
  return (
    <div>
      <WorkWithUs />
    </div>
  );
}

workwithus.Layout = StandardLayout;
