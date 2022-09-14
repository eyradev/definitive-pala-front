import React from 'react';
import styles from './ContactUsHeader.module.css';

function ContactUsHeader(): JSX.Element {
  return (
    <>
      <div className="page-header page-header-small">
        <div className={`page-header-image ${styles.headerImg}`}></div>
      </div>
    </>
  );
}

export default ContactUsHeader;
