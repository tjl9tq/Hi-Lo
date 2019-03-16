import { ActionTypes } from '../actions/players';

export interface PlayersState {
  currentTurn: number,
  playerOnePoints: number,
  playerTwoPoints: number,
}

const initialState: PlayersState = {
  currentTurn: 1,
  playerOnePoints: 0,
  playerTwoPoints: 0,
}

export default (state: PlayersState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.PLAYER_SET_TURN:
      return {
        ...state,
        currentTurn: action.payload,
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
    default:
      return state
  }
}