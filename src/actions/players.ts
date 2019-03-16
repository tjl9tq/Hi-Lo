export const ActionTypes = {
  PLAYER_SET_TURN: 'PLAYER_SET_TURN',
  PLAYER_SET_ONE_POINTS: 'PLAYER_SET_POINTS_ONE',
  PLAYER_SET_TWO_POINTS: 'PLAYER_SET_POINTS_TWO',
}

export const Actions = {
  playerSetTurn: (turn: number) => ({
    type: ActionTypes.PLAYER_SET_TURN,
    payload: turn,
  }),
  playerSetOnePoints: (points: number) => ({
    type: ActionTypes.PLAYER_SET_ONE_POINTS,
    payload: points,
  }),
  playerSetTwoPoints: (points: number) => ({
    type: ActionTypes.PLAYER_SET_TWO_POINTS,
    payload: points,
  }),
}