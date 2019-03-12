export interface Card {
  code: string;
  image: string;
  suit: string;
  value: string;
}

export interface Deck {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}