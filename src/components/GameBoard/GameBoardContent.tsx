import React from 'react'

import { Button, IconButton, Tooltip } from '@material-ui/core';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import {
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import { Card } from '../../types';

const styles = createStyles({
  gameBoardContent: {
    position: 'relative',
    top: '25px',
    color: '#282c34',
    fontSize: 'medium'
  },
  textBox: {
    position: 'absolute',
    top: '170px',
    left: '37px',
  },
  button: {
    position: 'relative',
    bottom: '10px'
  }
})

interface GameBoardContentProps {
  currentCard: Card | null,
  handleDrawCard: () => void,
  guess: string,
  getHi: () => boolean,
  getLo: () => boolean,
  setHi: () => void,
  setLo: () => void,
  pileCount: number,
  correctGuesses: number,
}

type Props = WithStyles<typeof styles> & GameBoardContentProps;

const GameBoardContent: React.SFC<Props> = ({
  classes,
  currentCard,
  handleDrawCard,
  guess,
  getHi,
  getLo,
  setHi,
  setLo,
  pileCount,
  correctGuesses,
}) => (
    <div className={classes.gameBoardContent}>
      {currentCard &&
        <img src={currentCard.image} height="150" width="105" />
      }
      <div className={classes.textBox}>
        <div className={classes.button}>
          <Button onClick={handleDrawCard} variant="outlined" color="primary">
            Draw Card
          </Button>
        </div>
        <div>
          Your guess: {guess}
          <br />
          <IconButton onClick={setHi}>
            <ArrowDropUp
              color={getHi() ? "primary" : 'disabled'}
              fontSize="large"
            />
          </IconButton>
          <IconButton onClick={setLo}>
            <ArrowDropDown
              color={getLo() ? "primary" : 'disabled'}
              fontSize="large"
            />
          </IconButton>
          <br />
          Cards in Pile: {pileCount}
          <br />
          Correct Guesses: {correctGuesses}
        </div>
      </div>
    </div>
  )

export default withStyles(styles)(GameBoardContent);
