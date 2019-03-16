import { combineReducers } from 'redux'
import deck, { DeckState } from './deck'
import players, {PlayersState} from './players'

export interface ApplicationState {
  deck: DeckState;
  players: PlayersState;
}

export const selectors = {
  getCurrentCard: (state: ApplicationState) => state.deck.currentCard,
  getDeckId: (state: ApplicationState) => state.deck.deckId,
  getLoading: (state: ApplicationState) => state.deck.loading,
  getRemainingCards: (state: ApplicationState) => state.deck.remainingCards,
  getPlayerOneTurn: (state: ApplicationState) => state.players.playerOneTurn,
  getPlayerOnePoints: (state: ApplicationState) => state.players.playerOnePoints,
  getPlayerTwoPoints: (state: ApplicationState) => state.players.playerTwoPoints,
}

export default combineReducers<ApplicationState>({
  deck,
  players,
})