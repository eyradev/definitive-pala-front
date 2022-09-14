export interface ContactRequest {
  type: 'P' | 'Q' | 'R' | 'S' | 'D' | 'F';
  name: string;
  email: string;
  phone: string;
  message: string;
}
