import Link from 'next/link';
import router from 'next/router';
import { useState } from 'react';
import {
  Badge,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';
import useCart from '../../../../hooks/useCart';
import useUserPP from '../../../../hooks/useUserPP';
import { Searchbar } from '../../../search';
import { Logo } from '../../Logo';
import styles from './StandardNavbar.module.css';

export default function StandardNavbar(): JSX.Element {
  const [isCollapseOpen, setCollapseOpen] = useState(false);
  const { signout, user } = useUserPP();
  const { lineItems, toggleCart } = useCart();

  const getCartCount = () =>
    lineItems?.allLineItems?.reduce<number>(
      (acc, curr) => acc + (curr?.quantity || 0),
      0
    );

  const handleBodyClick = () => {
    document.documentElement.classList.toggle('nav-open');
    setCollapseOpen(false);
  };

  const cart = (
    <div
      style={{
        position: 'relative',
        marginLeft: '5px',
        marginRight: '-7px'
      }}
      className={styles.cart}
      onClick={toggleCart}
    >
      <Badge
        className="mr-1"
        color="light"
        style={{
          border: '1px solid var(--primary)'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            fontSize: '0.6rem',
            paddingRight: '3px',
            color: 'var(--primary)'
          }}
        >
          <Logo variant="icon" height={16} width={16} />
          <p>&nbsp;{lineItems?.allLineItems?.length ? getCartCount() : 0}</p>
        </div>
      </Badge>
    </div>
  );

  const rightLinks = user ? (
    <>
      <UncontrolledDropdown nav>
        <DropdownToggle
          caret
          color="default"
          data-toggle="dropdown"
          id="navbarDropdownMenuUser"
          nav
          onClick={(e) => e.preventDefault()}
        >
          <p>Hola {user.name}!</p>
        </DropdownToggle>
        <DropdownMenu aria-labelledby="navbarDropdownMenuUser" right>
          <Link href="/personal-info">
            <DropdownItem>
              <i className="now-ui-icons users_single-02" />
              Mi perfil
            </DropdownItem>
          </Link>
          <Link href="/history">
            <DropdownItem>
              <i className="now-ui-icons files_paper" />
              Historial
            </DropdownItem>
          </Link>
          <DropdownItem
            onClick={() => {
              signout && signout();
            }}
          >
            <i className="now-ui-icons ui-1_settings-gear-63" />
            Cerrar Sesión
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  ) : (
    <>
      <Link href="/workwithus">
        <NavItem>
          <NavLink className={styles.Navlink}>Vende</NavLink>
        </NavItem>
      </Link>
      <Link href="/login">
        <NavItem>
          <NavLink style={{ whiteSpace: 'nowrap' }} className={styles.Navlink}>
            Iniciar Sesión
          </NavLink>
        </NavItem>
      </Link>
      <Link href="/signup">
        <NavItem>
          <NavLink className={styles.Navlink}>Registrate</NavLink>
        </NavItem>
      </Link>
    </>
  );

  return (
    <>
      {isCollapseOpen && <div id="bodyClick" onClick={handleBodyClick}></div>}
      <Navbar
        className="bg-white"
        expand="lg"
        style={{ marginBottom: 0, zIndex: 1000 }}
        fixed=""
      >
        <Container>
          <div
            className="navbar-translate"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <NavbarBrand
              className={styles.logo}
              onClick={() => router.push('/')}
            >
              <Logo variant="typography" height={35} />
            </NavbarBrand>
            <Searchbar inputProps={{ size: 50 }} />
            {cart}
            <button
              onClick={() => {
                document.documentElement.classList.toggle('nav-open');
                setCollapseOpen(!isCollapseOpen);
              }}
              aria-expanded={isCollapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar" />
              <span className="navbar-toggler-bar middle-bar" />
              <span className="navbar-toggler-bar bottom-bar" />
            </button>
          </div>
          <Collapse isOpen={isCollapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              {rightLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}
