import { LineItem } from "generated/graphql";
import { useCartItemsQuery } from "graphql/cart-items/cart-items.query";
import { CART_ITEMS_items } from "graphql/cart-items/__generated__/CART_ITEMS";
import { useRemoveCartItemMutation } from "graphql/remove-cart-item/remove-cart-item.mutation";
import Link from "next/link";
import useApp from "providers/AppProvider/useApp";
import { Col, Row } from "reactstrap";
import useUserPP from "../../../hooks/useUserPP";
import { Backdrop } from "../../UI";
import { CartItem } from "../CartItem";
import CartItems from "../CartItems/CartItems";
import CartItemSection from "../CartItemsSection/CartItemsSection";
import CartTotals from "../CartTotals/CartTotals";
import styles from "./CartSidebar.module.css";

export default function CartSidebar(): JSX.Element {
  const { user } = useUserPP();
  const { isCartOpen, toggleCart } = useApp();

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
        <CartItemSection />
        {user ? (
          <div className={styles.footer}>
            <CartTotals />
          </div>
        ) : null}
      </div>
      <Backdrop isOpen={isCartOpen} onClick={toggleCart} />
    </>
  );
}
