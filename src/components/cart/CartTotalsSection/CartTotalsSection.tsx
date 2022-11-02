import { useCartPriceQuery } from "graphql/cart-price/cart-price.query";
import { useShippingQuery } from "graphql/shipping/shipping.query";
import { Spinner } from "reactstrap";
import CartTotals from "../CartTotals/CartTotals";

const CartTotalsSection: React.FC = () => {
  const shippingPriceQuery = useShippingQuery();
  const cartPriceQuery = useCartPriceQuery();

  const loading = shippingPriceQuery?.loading ?? cartPriceQuery?.loading;
  const error = shippingPriceQuery?.error ?? cartPriceQuery?.error;

  if (loading) return <Spinner />;
  if (error) return null;

  const shippingPrice = shippingPriceQuery?.data?.Shipping ?? undefined;
  const storePaysShipment = shippingPriceQuery?.data?.storePaysShipment;
  const cartPrice = cartPriceQuery?.data?.CartPrice ?? undefined;

  return (
    <CartTotals
      cartPrice={cartPrice}
      shippingPrice={shippingPrice}
      shippingPaidBy={storePaysShipment ? "store" : "user"}
    />
  );
};

export default CartTotalsSection;
