import { Card } from '../types';
import { ActionTypes } from '../actions/deck';

export interface DeckState {
  currentCard: Card | null;
  deckId: string;
  loading: boolean;
  remainingCards: number;
  error: any,
}

const initialState: DeckState = {
  currentCard: null,
  deckId: '',
  loading: false,
  remainingCards: 0,
  error: null,
}

export default (state: DeckState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.DECK_GET_PENDING:
      return { 
        ...state,
        loading: true,
      }
    case ActionTypes.DECK_GET_FULFILLED:
      return {
        ...state,
        loading: false,
        deckId: action.payload.deck_id,
        remainingCards: action.payload.remaining,
        }
    case ActionTypes.DECK_GET_REJECTED:
      return { 
        ...state,
        loading: false,
        error: action.payload,
        }
    // case ActionTypes.DECK_DRAW_PENDING:
    //   return {
    //     ...state,
    //     loading: true,
    //   }
    case ActionTypes.DECK_DRAW_FULFILLED:
      return {
        ...state,
        loading: false,
        currentCard: action.payload.cards[0],
        remainingCards: action.payload.remaining,
      }
    case ActionTypes.DECK_DRAW_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
  default:
    return state
  }
}
