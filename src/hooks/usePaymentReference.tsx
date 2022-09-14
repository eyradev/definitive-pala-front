import axios from 'axios';
import useSWR, { SWRConfiguration, SWRResponse } from 'swr';
import { Transaction, TransactionResponse } from '../models/transaction';

const VALIDATION_URL = 'https://secure.epayco.co/validation/v1/reference';

const hookConfiguration: SWRConfiguration = {
  errorRetryCount: 3,
  focusThrottleInterval: 60000,
  revalidateOnFocus: false
};

const fetcher = (url: string): Promise<Transaction> => {
  return axios.get(url).then((res) => {
    if (typeof res.data.status !== 'undefined' && !res.data.status)
      throw new Error('Error obteniendo transacción');

    const data = res.data as TransactionResponse;
    if (!data.success) throw new Error('Error obteniendo transacción');
    return data.data;
  });
};

export default function usePaymentReference(
  epaycoRef: string | undefined
): SWRResponse<Transaction, any> {
  return useSWR<Transaction, any>(
    epaycoRef ? `${VALIDATION_URL}/${epaycoRef}` : null,
    fetcher,
    hookConfiguration
  );
}
