import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
}

export default function Backdrop({
  isOpen,
  style,
  ...divProps
}: Props): JSX.Element {
  return (
    <div
      {...divProps}
      style={{
        ...style,
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1500,
        display: isOpen ? 'initial' : 'none'
      }}
    />
  );
}
