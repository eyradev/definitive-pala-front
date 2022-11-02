import { useCartPriceQuery } from "graphql/cart-price/cart-price.query";
import { useShippingQuery } from "graphql/shipping/shipping.query";
import Link from "next/link";
import { Spinner } from "reactstrap";
import { formatCurrency } from "../../../util/currency";
import styles from "./CartTotals.module.css";

export default function CartTotals(): JSX.Element | null {
  const cartPriceQuery = useCartPriceQuery();
  const shippingQuery = useShippingQuery();

  if (!cartPriceQuery || !shippingQuery) return null;

  const error = cartPriceQuery?.error ?? shippingQuery?.error;
  const loading = cartPriceQuery?.loading ?? shippingQuery?.loading;

  if (loading) return <Spinner />;
  if (error) return null;

  const cartPrice = cartPriceQuery?.data?.CartPrice;
  const shipping = shippingQuery?.data.Shipping;
  const storePaysShipment = shippingQuery?.data?.storePaysShipment;

  if (!cartPrice || typeof shipping?.shippingPrice !== "number") return null;

  let total = cartPrice.total;
  if (!storePaysShipment) {
    total += shipping.shippingPrice;
  }
  return (
    <div className={styles.root}>
      <ul>
        <li>
          <h5>Productos:</h5> {formatCurrency(cartPrice.total)}
        </li>

        <li>
          {storePaysShipment ? (
            <h5>Envio Incluido</h5>
          ) : (
            <>
              <h5>Envio:</h5> {formatCurrency(shipping.shippingPrice)}
            </>
          )}
        </li>

        <li>
          <h3>Total:</h3> <h3>{formatCurrency(total)}</h3>
        </li>
        {/* {typeof deliveryTotal !== "number" && (
          <li>
            <h4>+ Envio</h4>
          </li>
        )} */}
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
