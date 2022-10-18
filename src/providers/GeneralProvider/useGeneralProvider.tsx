import { useContext, useEffect } from "react";
import { GeneralContext } from "./GeneralProvider";

export const useGeneralProvider = () => {
  const context = useContext(GeneralContext);
  useEffect(() => {
    if (!Object.keys(context).length) console.warn("not in general context");
  }, [context]);
  return context;
};
