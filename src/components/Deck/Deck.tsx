import React from 'react'

import {
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';

const styles = createStyles({
  deckContainer: {
    position: 'relative',
    bottom: '500px',
    left: '240px',
    fontSize: 'medium',
  },
  deck: {
    paddingTop: '10px',
  }
})

interface DeckProps {
  remainingCards: number,
  drawCard: () => void,
}

type Props = WithStyles<typeof styles> & DeckProps;

const cardBackArtUrl = 'https://opengameart.org/sites/default/files/card%20back%20black.png'

const Deck:React.SFC<Props> = ({ classes, remainingCards }) => {
  return (
    <div className={classes.deckContainer}>
      <div>Remaining Cards: {remainingCards} </div>
      <div className={classes.deck}>
        <img src={cardBackArtUrl} height='150px' width='105px'/>
      </div>
    </div>
  )
}

export default withStyles(styles)(Deck);
