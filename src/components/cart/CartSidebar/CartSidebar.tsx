import Link from 'next/link';
import { Col, Row } from 'reactstrap';
import useCart from '../../../hooks/useCart';
import useUserPP from '../../../hooks/useUserPP';
import { Backdrop } from '../../UI';
import { CartItem } from '../CartItem';
import CartTotals from '../CartTotals/CartTotals';
import styles from './CartSidebar.module.css';

export default function CartSidebar(): JSX.Element {
  const { lineItems, isOpen, toggleCart } = useCart();
  const { user } = useUserPP();

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.isOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <h3>Carrito {user ? `de ${user.name}` : ''}</h3>
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
                style={{ display: 'flex', justifyContent: 'center' }}
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
        <div className={styles.itemWrapper}>
          {lineItems?.allLineItems?.map((lineItem) => {
            if (lineItem) {
              return (
                <div key={lineItem.id} className={styles.item}>
                  <CartItem lineItem={lineItem} />
                </div>
              );
            }
          })}
        </div>
        {lineItems?.allLineItems?.length ? (
          <div className={styles.footer}>
            <CartTotals />
          </div>
        ) : null}
      </div>
      <Backdrop isOpen={isOpen} onClick={toggleCart} />
    </>
  );
}
