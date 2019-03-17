import React, { useState } from 'react'
import { Button, Modal, Paper } from '@material-ui/core';
import {
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';

const styles = createStyles({
  title: {
    textAlign: 'center',
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    padding: '15px',
  },
});

type Props = WithStyles<typeof styles>;

const HowToPlay: React.SFC<Props> = ({ classes }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        color="primary"
        onClick={handleOpen}
      >
        How to play
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Paper className={classes.paper}>
          <h3 className={classes.title}>How To Play</h3>
          <ol>
            <li>Hit DRAW CARD to start the game.</li>
            <li>Player 1 goes first</li>
            <li>Hit the up or down arrow to guess if the next card will be higher or lower than the current card. Click DRAW CARD again to lock in your guess.</li>
            <li>If your guess was correct, you guess again. If your guess was incorrect, the number of cards in the pile gets added to your point total and the turn goes to Player 2.</li>
            <li>If you make 3 correct guesses in a row, you may choose to make another guess or pass the turn over to the other player.</li>
            <li>Suits are not taken into account for higher or lower cards. In the case two equal cards are drawn in a row, the pile count increases and you get to guess again.</li>
            <li>At the last card of the deck, whichever player has fewer points wins.</li>
          </ol>
        </Paper>
      </Modal>
    </div>
  )
}

export default withStyles(styles)(HowToPlay);
