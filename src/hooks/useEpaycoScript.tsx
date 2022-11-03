import { useEffect, useState } from "react";

interface Epayco {
  checkout: {
    configure(options: any): any;
  };
  open(data: any): any;
}

interface EpaycoExport {
  isScriptLoaded: boolean;
  epayco: Epayco | undefined;
}

const url = "https://checkout.epayco.co/checkout.js";

const epaycoConfig = {
  key: process.env.NEXT_PUBLIC_EPAYCO_KEY,
  test: true,
};

export default function useEpaycoScript(): EpaycoExport {
  const [isScriptLoaded, setScriptLoaded] = useState(false);
  const [epayco, setEpayco] = useState<Epayco>();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    script.onload = () => {
      setScriptLoaded(true);
      // ePayco is set by the loaded script
      // @ts-ignore
      const handler = ePayco.checkout.configure(epaycoConfig);
      setEpayco(handler);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return { isScriptLoaded, epayco };
}
