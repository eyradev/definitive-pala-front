import { CartPrice, Shipping } from "generated/graphql";
import { useRouter } from "next/router";
import { formatCurrency } from "../../../util/currency";
import styles from "./CartTotals.module.css";

const CartTotals: React.FC<{
  cartPrice?: Partial<CartPrice>;
  shippingPrice?: Partial<Shipping>;
  shippingPaidBy: "palante" | "store" | "user";
}> = ({ cartPrice, shippingPrice, shippingPaidBy }) => {
  const cartTotal = cartPrice?.total;
  const shippingTotal = shippingPrice?.shippingPrice;

  if (!cartPrice && !shippingPrice) return null;

  let total = cartTotal ?? 0;
  if (shippingPaidBy === "user" && shippingTotal) {
    total += shippingTotal;
  }

  const totalDiscount =
    (cartPrice?.palanteDiscount || 0) + (cartPrice?.storeDiscount || 0);

  return (
    <div className={styles.root}>
      <ul>
        {cartPrice?.basePrice ? (
          <li>
            <h5>Productos:</h5> {formatCurrency(cartPrice.basePrice)}
          </li>
        ) : null}
        {totalDiscount ? (
          <li>
            <h5>Descuento Cupones:</h5> {formatCurrency(totalDiscount)}
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
    </div>
  );
};

export default CartTotals;
