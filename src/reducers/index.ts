import { combineReducers } from 'redux'
import deck, { DeckState } from './deck'

export interface ApplicationState {
  deck: DeckState;
}

export const selectors = {
  getCurrentCard: (state: ApplicationState) => state.deck.currentCard,
  getDeckId: (state: ApplicationState) => state.deck.deckId,
  getLoading: (state: ApplicationState) => state.deck.loading,
  getRemainingCards: (state: ApplicationState) => state.deck.remainingCards,
}

export default combineReducers<ApplicationState>({
  deck,
})