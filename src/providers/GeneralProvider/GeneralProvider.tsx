import { OperationVariables, QueryResult } from "@apollo/client";
import { PalanteError } from "errors/palante.error";
import useNotification from "hooks/useNotification";
import { createContext, useEffect } from "react";
import { useCartQuery } from "./graphql/cart.query";
import { CART } from "./graphql/__generated__/CART";

export const GeneralContext = createContext<{
  cart?: QueryResult<CART, OperationVariables>;
}>({});

export default function GeneralProvider({
  children,
}: {
  children?: JSX.Element;
}) {
  const { addNotification } = useNotification();

  const cartQueryResult = useCartQuery();

  useEffect(() => {
    if (!cartQueryResult.error) return;
    const palanteError = PalanteError.from(cartQueryResult.error);
    if (palanteError) {
      addNotification({ type: "danger", message: palanteError.message });
    }
  }, [cartQueryResult.error, addNotification]);

  // manage cart state
  useEffect(() => {
    if (
      cartQueryResult.data?.Cart?.deletedItems?.length ||
      cartQueryResult.data?.Cart?.updatedItems?.length
    ) {
      addNotification({ type: "info", message: "Se ha modificado tu carrito" });
    }
  }, [cartQueryResult.data, addNotification]);

  return (
    <GeneralContext.Provider
      value={{
        cart: cartQueryResult,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
