export interface SellOrder {
  acceptTerms: boolean;
  address: string;
}

export interface Address {
  region: string;
  city: string;
  address: string;
  additionalInfo?: string;
}
