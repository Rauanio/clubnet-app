export interface LoginSchema {
  phone: string;
  otp: string;
  user?: null;
  isLoading?: boolean;
  error?: string;
}
