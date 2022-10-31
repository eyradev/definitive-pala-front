import { useContext, useEffect } from "react";
import { CheckoutContext } from "./CheckoutProvider";

const useCheckout = () => {
  const context = useContext(CheckoutContext);

  useEffect(() => {
    if (!Object.keys(context).length) console.warn(NOT_IN_CONTEXT_WARNING);
  }, [context]);

  return context;
};

export const NOT_IN_CONTEXT_WARNING =
  "No Checkout context. Did you forget to wrap the component in a <CheckoutProvider />?";

export default useCheckout;
