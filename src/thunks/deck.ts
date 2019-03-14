import { ThunkAction } from 'redux-thunk';
import { ApplicationState, selectors } from '../reducers';
import { Actions } from '../actions/deck';
import { Action } from 'redux';
import * as api from '../api';
import { hiOrLo } from '../helpers';
import { DrawCardResponse } from '../types';

export const Thunks = {
  getDeck: (): ThunkAction<void, ApplicationState, void, Action<any>> => (dispatch) => {
    dispatch(Actions.deckGetPending());
    api.getNewDeck().then(response => {
      dispatch(Actions.deckGetFulfilled(response));
    }).catch(error => {
      dispatch(Actions.deckGetRejected(error));
    })
  },

  drawCard: (): ThunkAction<void, ApplicationState, void, Action<any>> => (dispatch, getState) => {
    dispatch(Actions.deckDrawPending());
    const state = getState();
    const deckId = selectors.getDeckId(state);
    const currentCard = selectors.getCurrentCard(state);
    api.drawCard(deckId).then((response: DrawCardResponse) => {
      const nextCard = response.cards[0];
      const hiOrLoValue = currentCard ? hiOrLo(currentCard, nextCard) : 'neither';
      dispatch(Actions.deckDrawFulfilled(response));
      dispatch(Actions.deckHiOrLo(hiOrLoValue));
    }).catch(error => {
      dispatch(Actions.deckDrawRejected(error));
    })
  }
}