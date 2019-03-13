

export interface DeckState {
  currentTurn: number,
  playerOnePoints: number,
  playerTwoPoints: number,
}

const initialState: DeckState = {
  currentTurn: 1,
  playerOnePoints: 0,
  playerTwoPoints: 0,
}
