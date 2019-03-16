import { Deck, DrawCardResponse } from '../types';

export const ActionTypes = {
  DECK_GET_PENDING: 'DECK_GET_PENDING',
  DECK_GET_FULFILLED: 'DECK_GET_FULFILLED',
  DECK_GET_REJECTED: 'DECK_GET_REJECTED',
  DECK_DRAW_PENDING: 'DECK_DRAW_PENDING',
  DECK_DRAW_FULFILLED: 'DECK_DRAW_FULFILLED',
  DECK_DRAW_REJECTED: 'DECK_DRAW_REJECTED',
}

export const Actions = {
  deckGetPending: () => ({
    type: ActionTypes.DECK_GET_PENDING,
  }),
  deckGetFulfilled: (deck: Deck) => ({
    type: ActionTypes.DECK_GET_FULFILLED,
    payload: deck,
  }),
  deckGetRejected: (error: any) => ({
    type: ActionTypes.DECK_GET_REJECTED,
    payload: error,
  }),
  deckDrawPending: () => ({
    type: ActionTypes.DECK_DRAW_PENDING,
  }),
  deckDrawFulfilled: (card: DrawCardResponse) => ({
    type: ActionTypes.DECK_DRAW_FULFILLED,
    payload: card,
  }),
  deckDrawRejected: (error: any) => ({
    type: ActionTypes.DECK_DRAW_REJECTED,
    payload: error,
  }),
}
