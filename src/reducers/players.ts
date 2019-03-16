import { ActionTypes } from '../actions/players';

export interface PlayersState {
  playerOneTurn: boolean,
  playerOnePoints: number,
  playerTwoPoints: number,
}

const initialState: PlayersState = {
  playerOneTurn: true,
  playerOnePoints: 0,
  playerTwoPoints: 0,
}

export default (state: PlayersState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.PLAYER_CHANGE_TURN:
      return {
        ...state,
        playerOneTurn: !state.playerOneTurn
      }
    case ActionTypes.PLAYER_SET_ONE_POINTS:
      return {
        ...state,
        playerOnePoints: action.payload,
      }
    case ActionTypes.PLAYER_SET_TWO_POINTS:
      return {
        ...state,
        playerTwoPoints: action.payload,
      }
    case ActionTypes.PLAYER_RESET_GAME:
      return {
        ...initialState,
      }
    default:
      return state
  }
}