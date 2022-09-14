import Link from 'next/link';
import useCart from '../../../hooks/useCart';
import { formatCurrency } from '../../../util/currency';
import styles from './CartTotals.module.css';

export default function CartTotals(): JSX.Element | null {
  const { cartData, cartTotals, lineItems } = useCart();
  const productTotal = cartTotals?.total || 0;
  const deliveryTotal = cartData?.shippingOrder?.price || 0;
  const total = productTotal + deliveryTotal;

  if (!lineItems?.allLineItems?.length) return null;
  return (
    <div className={styles.root}>
      <ul>
        <li>
          <h5>Productos:</h5> {formatCurrency(productTotal)}
        </li>
        {cartData?.shippingOrder?.price && (
          <li>
            <h5>Envio:</h5> {formatCurrency(deliveryTotal)}
          </li>
        )}
        <li>
          <h3>Total:</h3> <h3>{formatCurrency(total)}</h3>
        </li>
        {!cartData?.shippingOrder?.price && <li>+ Envio</li>}
      </ul>
      <Link href="/checkout">
        <a>
          Ir a Checkout
          <i className="now-ui-icons arrows-1_minimal-right" />
        </a>
      </Link>
    </div>
  );
}
