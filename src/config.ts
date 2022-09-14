// required env variables

if (
  !process.env.NEXT_PUBLIC_ENDPOINT ||
  !process.env.NEXT_PUBLIC_PRODUCTS_PER_PAGE ||
  !process.env.NEXT_PUBLIC_APP_MODE ||
  !process.env.NEXT_PUBLIC_EPAYCO_KEY ||
  !process.env.NEXT_PUBLIC_FRONTEND_URL ||
  !process.env.NEXT_PUBLIC_EPAYCO_ID
) {
  throw new Error('Missing environment variables');
}

export const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;
export const perPage = process.env.NEXT_PUBLIC_PRODUCTS_PER_PAGE
  ? parseInt(process.env.NEXT_PUBLIC_PRODUCTS_PER_PAGE)
  : 3;
export const appMode = process.env.NEXT_PUBLIC_APP_MODE;
export const epaycoKey = process.env.NEXT_PUBLIC_EPAYCO_KEY;
export const epaycoID = process.env.NEXT_PUBLIC_EPAYCO_ID;
export const epaycoConfirmationURL = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/checkout`;
export const epaycoResponseURL = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/sellOrder`;

export const tcUrl = process.env.NEXT_PUBLIC_TC_URL;
export const dataTreatmentUrl = process.env.NEXT_PUBLIC_DATA_TREATMENT_URL;
export const endUserLicenseUrl = process.env.NEXT_PUBLIC_END_USER_LICENSE_URL;

export const epaycoTestMode = appMode === 'dev';
