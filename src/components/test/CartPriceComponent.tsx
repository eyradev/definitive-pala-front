import { useCartPriceQuery } from "graphql/cart-price/cart-price.query";
import { FC } from "react";
import { formatCurrency } from "util/currency";

const CartPriceComponent: FC = () => {
  const cartPriceQuery = useCartPriceQuery();
  if (!cartPriceQuery) return null;

  const { data, error, loading } = cartPriceQuery;
  if (loading) return <p>Loading...</p>;
  if (error) return null;
  if (!data?.CartPrice) return null;

  const {
    basePrice,
    palanteDiscount,
    palanteTotal,
    storeDiscount,
    storeTotal,
    tax,
    total,
  } = data.CartPrice;

  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>Cart Price</h3>
      <div>
        <strong>basePrice</strong>: {formatCurrency(basePrice)}
      </div>
      <div>
        <strong>storeDiscount</strong>: {formatCurrency(storeDiscount)}
      </div>
      <div>
        <strong>palanteDiscount</strong>: {formatCurrency(palanteDiscount)}
      </div>
      <div>
        <strong>totalToPay</strong>: {formatCurrency(total)}
      </div>
      <div>
        <strong>storeTotal </strong>: {formatCurrency(storeTotal)}
      </div>
      <div>
        <strong>palanteTotal</strong>: {formatCurrency(palanteTotal)}
      </div>
      <div>
        <strong>serviceTax</strong>: {formatCurrency(tax)}
      </div>
    </div>
  );
};

export default CartPriceComponent;
