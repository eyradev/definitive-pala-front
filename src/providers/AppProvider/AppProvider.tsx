// provider for keeping general app state

import { createContext, FC, useState } from "react";

export interface AppProviderContext {
  isCartOpen: boolean;
  toggleCart?: () => void;
}

export const AppContext = createContext<AppProviderContext>({
  isCartOpen: false,
});

const AppProvider: FC<{ children?: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const [isCartOpen, setCartOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setCartOpen((isCartOpen) => !isCartOpen);
  };

  return (
    <AppContext.Provider value={{ isCartOpen, toggleCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
