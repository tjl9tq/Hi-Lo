export const ActionTypes = {
  PLAYER_CHANGE_TURN: 'PLAYER_CHANGE_TURN',
  PLAYER_SET_ONE_POINTS: 'PLAYER_SET_POINTS_ONE',
  PLAYER_SET_TWO_POINTS: 'PLAYER_SET_POINTS_TWO',
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
}