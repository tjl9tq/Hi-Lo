export const ActionTypes = {
  PLAYER_CHANGE_TURN: 'PLAYER_CHANGE_TURN',
  PLAYER_SET_ONE_POINTS: 'PLAYER_SET_POINTS_ONE',
  PLAYER_SET_TWO_POINTS: 'PLAYER_SET_POINTS_TWO',
  PLAYER_RESET_GAME: 'PLAYER_RESET_GAME',
}

export const Actions = {
  playerChangeTurn: () => ({
    type: ActionTypes.PLAYER_CHANGE_TURN,
  }),
  playerSetOnePoints: (points: number) => ({
    type: ActionTypes.PLAYER_SET_ONE_POINTS,
    payload: points,
  }),
  playerSetTwoPoints: (points: number) => ({
    type: ActionTypes.PLAYER_SET_TWO_POINTS,
    payload: points,
  }),
  resetGame: () => ({
    type: ActionTypes.PLAYER_RESET_GAME,
  }),
}