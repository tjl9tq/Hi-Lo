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

export const hiOrLo = (previousCard: Card, currentCard: Card) => {
  const previousValue = getValue(previousCard);
  const currentValue = getValue(currentCard);
  if (previousValue < currentValue) {
    return 'Hi';
  }
  else if (previousValue > currentValue) {
    return 'Lo';
  }
  else {
    return 'neither';
  }
}