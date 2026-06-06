export interface Payout {
  id: string;
  firm: string;
  amount: string;
  payout_date: string;
  description: string | null;
  image: string | null;
  created_at: string;
}