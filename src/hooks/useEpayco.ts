import { useEffect, useState } from 'react';

const url = 'https://checkout.epayco.co/checkout.js';

interface EpaycoConfig {
  key: string;
  test?: boolean;
}

interface Epayco {
  checkout: {
    configure(options: any): any;
  };
  open(data: any): any;
}

interface EpaycoExport {
  loadedScript: boolean;
  epayco: Epayco | undefined;
}

export const useEpayco = (config: EpaycoConfig): EpaycoExport => {
  const [loadedScript, setLoaded] = useState<boolean>(false);
  const [epayco, setEpayco] = useState<Epayco>();

  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    script.onload = () => {
      setLoaded(true);
      // @ts-ignore
      const handler = ePayco.checkout.configure(config);
      setEpayco(handler);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [config.key]);

  return { loadedScript, epayco };
};

export default useEpayco;
