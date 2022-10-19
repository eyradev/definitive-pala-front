import {
  ApolloCache,
  DefaultContext,
  MutationTuple,
  OperationVariables,
  QueryResult,
} from "@apollo/client";
import { PalanteError } from "errors/palante.error";
import useNotification from "hooks/useNotification";
import { createContext, useEffect } from "react";
import { useAddCartItemMutation } from "./graphql/add-to-cart.query";
import { useCartQuery } from "./graphql/cart.query";
import {
  ADD_CART_ITEM,
  ADD_CART_ITEMVariables,
} from "./graphql/__generated__/ADD_CART_ITEM";
import { CART } from "./graphql/__generated__/CART";

export const GeneralContext = createContext<{
  cart?: QueryResult<CART, OperationVariables>;
  addLineItem?: MutationTuple<
    ADD_CART_ITEM,
    ADD_CART_ITEMVariables,
    DefaultContext,
    ApolloCache<any>
  >;
}>({});

export default function GeneralProvider({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
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
