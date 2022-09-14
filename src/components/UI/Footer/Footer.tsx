import Link from 'next/link';
import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { dataTreatmentUrl, tcUrl } from '../../../config';
import styles from './Footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <>
      <footer className={`footer footer-big ${styles.footer}`}>
        <Container>
          <div className="content">
            <Row>
              <Col md="4">
                <h5 className={styles.titulo}>Ayuda / PQR</h5>
                <ul className="links-vertical">
                  <li className={styles.vinculo}>
                    <Link href="/FAQ">
                      <a>Preguntas</a>
                    </Link>
                  </li>
                  <li className={styles.vinculo}>
                    <Link href="/sugerencias">
                      <a>En que podemos mejorar?</a>
                    </Link>
                  </li>
                  <li className={styles.vinculo}>
                    <Link href="/contacto">
                      <a>Contactanos</a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md="4">
                <h5 className={styles.titulo}>Terminos y condiciones</h5>
                <ul className="links-vertical">
                  <li className={styles.vinculo}>
                    <Link href={tcUrl || '#'}>
                      <a>Licencia de usuario final</a>
                    </Link>
                  </li>
                  <li className={styles.vinculo}>
                    <Link href={dataTreatmentUrl || '#'}>
                      <a>Tratamiento de datos</a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md="4">
                <h5 className={styles.titulo}>Siguenos</h5>
                <ul className="social-buttons">
                  <li>
                    <Button
                      className="btn-icon btn-neutral btn-round mr-1"
                      color="youtube"
                      href="https://www.youtube.com/channel/UCc5Phw-Gf0zMbehFttqyYzA"
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon btn-neutral btn-round mr-1"
                      color="facebook"
                      href="https://www.facebook.com/Palante-Marketplace-107262821536739"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon btn-neutral btn-round mr-1"
                      color="linkedin"
                      href="https://www.linkedin.com/company/palantemp"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon btn-neutral btn-round"
                      color="instagram"
                      href="https://www.instagram.com/palantemp/"
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <hr></hr>
          <div className="copyright">
            © All rights reserved to Palante {new Date().getFullYear()}.
            Developed & Powered by{' '}
            <Link href="https://eyra.dev">
              <a className={styles.copyright}>EYRA</a>
            </Link>
          </div>
        </Container>
      </footer>
    </>
  );
}
