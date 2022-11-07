import CartTotalsSection from "components/cart/CartTotalsSection/CartTotalsSection";
import useCheckout from "providers/CheckoutProvider/useCheckout";

const CartPriceSection: React.FC = () => {
  const { storeCoupon, palanteCoupon } = useCheckout();
  return (
    <CartTotalsSection
      palanteCouponId={palanteCoupon?.id}
      storeCouponId={storeCoupon?.id}
    />
  );
};

export default CartPriceSection;
