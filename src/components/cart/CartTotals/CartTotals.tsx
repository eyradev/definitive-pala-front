import Link from "next/link";
import useCart from "../../../hooks/useCart";
import { formatCurrency } from "../../../util/currency";
import styles from "./CartTotals.module.css";

export default function CartTotals(): JSX.Element | null {
  const { cartData, cartTotals, lineItems } = useCart();
  const productTotal = cartTotals?.total;
  const deliveryTotal = cartData?.shippingOrder?.price;
  const storePaysShipment = cartTotals?.storePaysShipment;

  let total = productTotal || 0;
  if (!storePaysShipment) {
    total += deliveryTotal || 0;
  }

  if (!lineItems?.allLineItems?.length) return null;
  return (
    <div className={styles.root}>
      <ul>
        {typeof productTotal === "number" && (
          <li>
            <h5>Productos:</h5> {formatCurrency(productTotal)}
          </li>
        )}
        {typeof deliveryTotal === "number" && (
          <li>
            {storePaysShipment ? (
              <h5>Envio Incluido</h5>
            ) : (
              <>
                <h5>Envio:</h5> {formatCurrency(deliveryTotal)}
              </>
            )}
          </li>
        )}
        <li>
          <h3>Total:</h3> <h3>{formatCurrency(total)}</h3>
        </li>
        {typeof deliveryTotal !== "number" && (
          <li>
            <h4>+ Envio</h4>
          </li>
        )}
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
