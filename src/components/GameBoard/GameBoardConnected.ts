import { connect } from 'react-redux';

import { ApplicationState, selectors } from '../../reducers';
import GameBoard from './GameBoard';
import { Thunks } from '../../thunks/deck';

const mapStateToProps = (state: ApplicationState) => ({
  remainingCards: selectors.getRemainingCards(state),
  loading: selectors.getLoading(state),
  currentCard: selectors.getCurrentCard(state),
})

const mapDispatchToProps = {
  drawCard: Thunks.drawCard,
  getDeck: Thunks.getDeck,
}


export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);