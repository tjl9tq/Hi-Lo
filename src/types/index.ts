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

export interface DrawCardResponse {
  success: boolean;
  cards: Card[];
  deck_id: string;
  remaining: number;
}