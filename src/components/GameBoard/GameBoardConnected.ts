import { connect } from 'react-redux';

import { ApplicationState, selectors } from '../../reducers';
import GameBoard from './GameBoard';
import { Actions } from '../../actions/players';
import { Thunks } from '../../thunks/deck';

const mapStateToProps = (state: ApplicationState) => ({
  remainingCards: selectors.getRemainingCards(state),
  loading: selectors.getLoading(state),
  currentCard: selectors.getCurrentCard(state),
  playerOnePoints: selectors.getPlayerOnePoints(state),
  playerTwoPoints: selectors.getPlayerTwoPoints(state),
})

const mapDispatchToProps = {
  drawCard: Thunks.drawCard,
  getDeck: Thunks.getDeck,
  setPlayerOnePoints: Actions.playerSetOnePoints,
  setPlayerTwoPoints: Actions.playerSetTwoPoints,
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);