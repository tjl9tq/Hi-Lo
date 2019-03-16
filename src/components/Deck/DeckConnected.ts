import { connect } from 'react-redux';

import { ApplicationState, selectors } from '../../reducers';
import Deck from './Deck';
import { Thunks } from '../../thunks/deck';

const mapStateToProps = (state: ApplicationState) => ({
  remainingCards: selectors.getRemainingCards(state),
})

const mapDispatchToProps = {
  drawCard: Thunks.drawCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);