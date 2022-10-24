import { useAdjustCartMutation } from "graphql/adjust-cart/adjust-cart.mutation";
import { FC } from "react";

const AdjustCartComponent: FC = () => {
  const adjustCartTuple = useAdjustCartMutation();
  if (!adjustCartTuple) return null;

  const [adjustCart, { loading }] = adjustCartTuple;

  const handleClick = async () => {
    await adjustCart();
  };

  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>Adjust Cart</h3>
      <button onClick={handleClick} disabled={!!loading}>
        Adjust Cart
      </button>
    </div>
  );
};

export default AdjustCartComponent;
