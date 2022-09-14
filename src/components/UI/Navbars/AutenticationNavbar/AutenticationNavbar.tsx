import Link from 'next/link';
import { useState } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { Logo } from '../../Logo';
import styles from './AutenticationNavbar.module.css';

export default function DropDownFixedNavbar(): JSX.Element {
  const [isCollapseOpen, setCollapseOpen] = useState(false);

  const handleBodyClick = () => {
    document.documentElement.classList.toggle('nav-open');
    setCollapseOpen(false);
  };

  return (
    <>
      {isCollapseOpen && <div id="bodyClick" onClick={handleBodyClick}></div>}
      <Navbar className="navbar-absolute navbar-transparent" expand="lg">
        <Container>
          <div className={`navbar-translate ${styles.Logo}`}>
            <Link href="/">
              <NavbarBrand to="/" id="navbar-brand">
                <Logo variant="typography" height={35} />
              </NavbarBrand>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
