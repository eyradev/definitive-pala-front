import { useQuery } from "@apollo/client";
import Link from "next/link";
import router from "next/router";
import React, { useState } from "react";
import {
  Badge,
  Col,
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
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import breakpoints from "../../../../constants/breakpoints";
import useCart from "../../../../hooks/useCart";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import useUserPP from "../../../../hooks/useUserPP";
import {
  GET_ALL_ILLNESSES,
  GET_ALL_PREFERENCES,
} from "../../../../queries/category";
import { ALL_ILLNESSES } from "../../../../queries/__generated__/ALL_ILLNESSES";
import {
  ALL_PREFERENCES,
  ALL_PREFERENCES_allCategories,
} from "../../../../queries/__generated__/ALL_PREFERENCES";
import { Searchbar } from "../../../search";
import { Logo } from "../../Logo";
import styles from "./DetailedNavbar.module.css";

export default function DetailedNavbar(): JSX.Element {
  const [isCollapseOpen, setCollapseOpen] = useState(false);
  const { signout, user } = useUserPP();

  const isNavCollapsed = useMediaQuery(`(max-width: ${breakpoints.lg}px)`);
  const isSM = useMediaQuery(`(max-width: ${breakpoints.md}px)`);
  const isXS = useMediaQuery(`(max-width: ${breakpoints.sm}px)`);

  const { lineItems, toggleCart } = useCart();

  const handleBodyClick = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(false);
  };

  const { data: categories } = useQuery<ALL_PREFERENCES>(GET_ALL_PREFERENCES);
  const { data: illnesses } = useQuery<ALL_ILLNESSES>(GET_ALL_ILLNESSES);

  const handleCategoryClick =
    (item: ALL_PREFERENCES_allCategories, type: "illness" | "category") =>
    () => {
      const query =
        type === "illness"
          ? {
              key: encodeURIComponent(`Apto para ${item.name}`),
              illness: item.id,
            }
          : {
              key: encodeURIComponent(`Categoría ${item.name}`),
              category: item.id,
            };

      router.push({
        pathname: "/search",
        query,
      });
    };

  const getCartCount = () =>
    lineItems?.allLineItems?.reduce<number>(
      (acc, curr) => acc + (curr?.quantity || 0),
      0
    );

  const cart = (
    <div
      style={{
        position: "relative",
        marginLeft: isNavCollapsed ? "5px" : "0",
        marginRight: "-7px",
      }}
      className={styles.cart}
    >
      <Badge
        className="mr-1"
        onClick={toggleCart}
        color={isNavCollapsed ? "light" : "light"}
        style={{
          border: "1px solid var(--primary)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            fontSize: "0.6rem",
            paddingRight: "3px",
            color: "var(--primary)",
          }}
        >
          <Logo variant="icon" height={16} width={16} />
          <p>&nbsp;{getCartCount()}</p>
        </div>
      </Badge>
    </div>
  );

  const leftLinks = (
    <>
      {categories?.allCategories?.length && (
        <UncontrolledDropdown nav>
          <DropdownToggle
            caret
            color="default"
            data-toggle="dropdown"
            id="navbarDropdownMenuLink1"
            nav
          >
            <p>Categorias</p>
          </DropdownToggle>
          <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
            {categories.allCategories.map((category) =>
              category ? (
                <DropdownItem
                  key={category.id}
                  onClick={handleCategoryClick(category, "category")}
                >
                  {category.name}
                </DropdownItem>
              ) : null
            )}
          </DropdownMenu>
        </UncontrolledDropdown>
      )}
      {illnesses?.allCategories?.length && (
        <UncontrolledDropdown nav>
          <DropdownToggle
            caret
            color="default"
            data-toggle="dropdown"
            id="illnessDropdown"
            nav
          >
            Apto Para
          </DropdownToggle>
          <DropdownMenu aria-labelledby="illnessDropdown" right>
            {illnesses.allCategories.map((illness) =>
              illness ? (
                <DropdownItem
                  key={illness.id}
                  onClick={handleCategoryClick(illness, "illness")}
                >
                  {illness.name}
                </DropdownItem>
              ) : null
            )}
          </DropdownMenu>
        </UncontrolledDropdown>
      )}
      <NavItem>
        <NavLink
          className={styles.Navlink}
          onClick={() =>
            router.push(
              `/search?key=${encodeURIComponent(
                "Todas Nuestras Ofertas!"
              )}&offersOnly=true`
            )
          }
        >
          Promociones
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={styles.Navlink}
          onClick={() => router.push("/contactus")}
        >
          Contactanos
        </NavLink>
      </NavItem>
    </>
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
          <p>Hola {user?.name}!</p>
        </DropdownToggle>
        <DropdownMenu aria-labelledby="navbarDropdownMenuUser" right>
          <Link href="/profile">
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

      {!isNavCollapsed && cart}
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
          <NavLink style={{ whiteSpace: "nowrap" }} className={styles.Navlink}>
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
        style={{ marginBottom: 0, zIndex: 100 }}
      >
        <Container>
          <div
            className="navbar-translate"
            style={{ display: "flex", alignItems: "center" }}
          >
            <NavbarBrand>
              <Logo
                variant={isXS ? "icon" : isSM ? "typography" : "horizontal"}
                height={isSM ? 70 : 80}
              />
            </NavbarBrand>
            <Row>
              <Col xs="12" style={isXS ? { paddingLeft: 0 } : undefined}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Searchbar inputProps={{ size: isNavCollapsed ? 60 : 50 }} />
                  {isNavCollapsed && (
                    <div className={styles.infoList}>{cart}</div>
                  )}
                </div>
              </Col>
              {!isNavCollapsed && (
                <Col xs="12">
                  <div className={styles.infoList}>{leftLinks}</div>
                </Col>
              )}
            </Row>

            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!isCollapseOpen);
              }}
              aria-expanded={isCollapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={isCollapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              {isNavCollapsed ? (
                rightLinks
              ) : (
                <Row style={{ marginLeft: "10px" }}>
                  <Col xs="12">
                    <NavItem>
                      <p
                        style={{
                          marginLeft: "10px",
                          whiteSpace: "nowrap",
                          color: "var(--secondary)",
                        }}
                      >
                        De la fábrica a tu casa, buena idea !!!
                      </p>
                    </NavItem>
                  </Col>

                  <Col xs="12">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {rightLinks}
                    </div>
                  </Col>
                </Row>
              )}
              {isNavCollapsed && leftLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}
