// provider for keeping general app state

import { Loading } from "components/UI";
import { Configuration } from "generated/graphql";
import { useConfigurationQuery } from "graphql/configuration/config.query";
import { createContext, FC, useState } from "react";

export interface AppProviderContext {
  isCartOpen: boolean;
  config: Configuration;
  toggleCart?: () => void;
}

const defaultEpaycoId = process.env.NEXT_PUBLIC_EPAYCO_ID ?? "";
const defaultMinCheckoutAmount = parseFloat(
  process.env.NEXT_PUBLIC_MIN_CHECKOUT_AMOUNT ?? "15000"
);
const defaultTaxValue = parseFloat(process.env.NEXT_PUBLIC_TAX_VALUE ?? "0.19");

export const AppContext = createContext<AppProviderContext>({
  isCartOpen: false,
  config: {
    epaycoId: defaultEpaycoId,
    minCheckoutAmount: defaultMinCheckoutAmount,
    taxValue: defaultTaxValue,
  },
});

const AppProvider: FC<{ children?: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const { data, loading, error } = useConfigurationQuery();

  if (loading) return <Loading />;
  if (error || !data?.Configuration) return null;

  const toggleCart = () => {
    setCartOpen((isCartOpen) => !isCartOpen);
  };

  return (
    <AppContext.Provider
      value={{ isCartOpen, toggleCart, config: data.Configuration }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
