import { createRef, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { landScapeImages } from '../../../../mock/images';
import styles from './AboutUsHeader.module.css';

export default function AboutusHeader(): JSX.Element {
  const pageHeader = createRef<HTMLDivElement>();

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        if (!pageHeader?.current) return;

        const windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)';
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${landScapeImages[0]})`
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h1 className="title">About Us</h1>
              <h4 className={styles.black}>
                Meet the amazing team behind this project and find out more
                about how we work.
              </h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
