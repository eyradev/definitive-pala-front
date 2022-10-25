import {
  ApolloCache,
  DefaultContext,
  MutationTuple,
  OperationVariables,
  QueryResult,
} from "@apollo/client";
import { createContext } from "react";
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
  return (
    <GeneralContext.Provider value={{}}>{children}</GeneralContext.Provider>
  );
}
