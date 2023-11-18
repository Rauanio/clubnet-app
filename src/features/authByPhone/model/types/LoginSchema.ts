import { DocumentData } from 'firebase/firestore';

export interface LoginSchema {
  phone: string;
  otp: string;
  user?: DocumentData | null;
  isLoading?: boolean;
  isLoggedIn?: boolean;
  error?: string;
}
