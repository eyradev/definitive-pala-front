import { useCartPriceQuery } from "graphql/cart-price/cart-price.query";
import Link from "next/link";
import { useRouter } from "next/router";
import useApp from "providers/AppProvider/useApp";
import { Col, Row } from "reactstrap";
import { formatCurrency } from "util/currency";
import useUserPP from "../../../hooks/useUserPP";
import { Backdrop } from "../../UI";
import CartItemSection from "../CartItemsSection/CartItemsSection";
import CartTotalsSection from "../CartTotalsSection/CartTotalsSection";
import styles from "./CartSidebar.module.css";

export default function CartSidebar(): JSX.Element {
  const { user } = useUserPP();
  const { isCartOpen, toggleCart, config } = useApp();
  const router = useRouter();
  const cartPriceQuery = useCartPriceQuery();

  const handleGoToCheckoutClick = () => {
    if (!router.isReady || !toggleCart) return;
    toggleCart();
    router.push("/checkout");
  };

  const hasCartPrice = !!cartPriceQuery?.data?.CartPrice?.canCheckout;
  const canCheckout =
    router.isReady && !router.pathname.includes("checkout") && hasCartPrice;

  return (
    <>
      <div className={`${styles.sidebar} ${isCartOpen ? styles.isOpen : ""}`}>
        <div className={styles.sidebarHeader}>
          <h3>Carrito {user ? `de ${user.name}` : ""}</h3>
          <div onClick={toggleCart} className={styles.closeSidebar}>
            <i className="now-ui-icons ui-1_simple-remove" />
          </div>
        </div>

        {!user && (
          <div className={styles.loginPrompt}>
            <Row>
              <Col xs={12}>
                <h4>Inicia sesión para ver los productos en tu carrito</h4>
              </Col>
              <Col
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link href="/login">
                  <a className="btn btn-primary" onClick={toggleCart}>
                    Iniciar Sesión!
                  </a>
                </Link>
              </Col>
            </Row>
          </div>
        )}
        <div style={{ padding: "0px 15px" }}>
          <CartItemSection />
        </div>

        {user ? (
          <div className={styles.footer}>
            <CartTotalsSection />
            {canCheckout ? (
              <div className={styles.checkoutLink}>
                <a onClick={handleGoToCheckoutClick}>
                  Ir a Checkout
                  <i className="now-ui-icons arrows-1_minimal-right" />
                </a>
              </div>
            ) : null}
            {!hasCartPrice ? (
              <div>
                debes llevar al menos {formatCurrency(config.minCheckoutAmount)}{" "}
                para poder hacer checkout
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      <Backdrop isOpen={isCartOpen} onClick={toggleCart} />
    </>
  );
}
