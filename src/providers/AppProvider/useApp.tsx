import { useContext, useEffect } from "react";
import { AppContext } from "./AppProvider";

const useApp = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    if (!Object.keys(context).length) console.warn(NOT_IN_CONTEXT_WARNING);
  }, [context]);

  return context;
};

export const NOT_IN_CONTEXT_WARNING =
  "No App context. Did you forget to wrap the component in a <AppProvider />?";

export default useApp;
