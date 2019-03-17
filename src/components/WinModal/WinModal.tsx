import React, { useState } from 'react'
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';

const styles = createStyles({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200px',

    padding: '30px',
    textAlign: 'center'
  },
  resetButton: {
    position: 'relative',
    top: '15px',
  }
});

interface WinModalProps {
  open: boolean;
  winner: string;
  resetGame: () => void;
}

type Props = WithStyles<typeof styles> & WinModalProps;


const WinModal: React.SFC<Props> = ({ open, winner, classes, resetGame }) => {
  return (
    <Modal
      open={open}
    >
      <Paper className={classes.paper}>
        Congrats Player {winner}!
        <br />
        You Win!
        <br />
        <Button
          color="primary"
          className={classes.resetButton}
          onClick={resetGame}
        >
          Restart Game
        </Button>
      </Paper>
    </Modal>
  )
}

export default withStyles(styles)(WinModal)
