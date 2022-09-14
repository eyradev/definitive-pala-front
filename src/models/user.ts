export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  address: string;
  cartId?: string;
}

export interface UserSignUpInput {
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  email: string;
  docNumber: string;
  docType: string;
  acceptTerms?: boolean;
}

export interface UserSignInInput {
  email: string;
  password: string;
}

export interface UserPasswordResetInput {
  email: string;
  password: string;
}
