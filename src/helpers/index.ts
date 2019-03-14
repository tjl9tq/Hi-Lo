import { Card } from "../types";

export const getValue = (card: Card) => {
  switch (card.value) {
    case 'JACK':
      return 11;
    case 'QUEEN':
      return 12;
    case 'KING':
      return 13;
    case 'ACE':
      return 14;
    default:
      return Number(card.value);
  }
}

export const hiOrLo = (currentCard: Card, nextCard: Card) => {
  const currentValue = getValue(currentCard);
  const nextValue = getValue(nextCard);
  if (nextValue > currentValue) {
    return 'Hi';
  }
  else if (nextValue < currentValue) {
    return 'Lo';
  }
  else {
    return 'neither';
  }
}