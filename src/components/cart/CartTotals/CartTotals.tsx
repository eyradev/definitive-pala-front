import { CartPrice, Shipping } from "generated/graphql";
import Link from "next/link";
import { useRouter } from "next/router";
import useApp from "providers/AppProvider/useApp";
import { formatCurrency } from "../../../util/currency";
import styles from "./CartTotals.module.css";

const CartTotals: React.FC<{
  cartPrice?: Partial<CartPrice>;
  shippingPrice?: Partial<Shipping>;
  shippingPaidBy: "palante" | "store" | "user";
}> = ({ cartPrice, shippingPrice, shippingPaidBy }) => {
  const { toggleCart } = useApp();
  const router = useRouter();

  const handleGoToCheckoutClick = () => {
    if (!router.isReady || !toggleCart) return;
    toggleCart();
    router.push("/checkout");
  };

  const cartTotal = cartPrice?.total;
  const shippingTotal = shippingPrice?.shippingPrice;

  if (!cartPrice && !shippingPrice) return null;

  let total = cartTotal ?? 0;
  if (shippingPaidBy === "user" && shippingTotal) {
    total += shippingTotal;
  }
  return (
    <div className={styles.root}>
      <ul>
        {cartTotal ? (
          <li>
            <h5>Productos:</h5> {formatCurrency(cartPrice.total)}
          </li>
        ) : null}
        {shippingPaidBy !== "user" ? (
          <li>
            <h5>Envio Incluido</h5>
          </li>
        ) : null}
        {shippingPaidBy === "user" && shippingTotal ? (
          <li>
            <h5>Envio:</h5> {formatCurrency(shippingTotal)}
          </li>
        ) : null}
        <li>
          <h3>Total:</h3> <h3>{formatCurrency(total)}</h3>
        </li>
        {shippingPaidBy === "user" && !shippingTotal ? (
          <li>
            <h4>+ Envio</h4>
          </li>
        ) : null}
      </ul>

      {router?.isReady ? (
        <a onClick={handleGoToCheckoutClick}>
          Ir a Checkout
          <i className="now-ui-icons arrows-1_minimal-right" />
        </a>
      ) : null}
    </div>
  );
};

export default CartTotals;
