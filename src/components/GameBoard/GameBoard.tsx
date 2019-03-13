import React, { useEffect, useState } from 'react';

import ReactLoading from 'react-loading';

import { Card } from '../../types';
import { Paper, Button, IconButton } from '@material-ui/core';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import {
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';

export interface gameBoardProps {
  currentCard: Card | null,
  loading: boolean,
  remainingCards: number,
}

export interface gameBoardHandlers {
  getDeck: () => void;
  drawCard: () => void;
}

const styles = createStyles({
  gameBoard: {
    height: '350px',
    width: '200px',
  },
  loader: {
    position: 'relative',
    left: '80px',
    top: '100px',
  },
  textBox: {
    position: 'absolute',
    top: '170px',
    left: '40px',
  }
})

type Props = WithStyles<typeof styles> & gameBoardProps & gameBoardHandlers;

const GameBoard: React.SFC<Props> = ({
  currentCard,
  drawCard,
  getDeck,
  loading,
  remainingCards,
  classes,
}) => {
  useEffect(() => {
    getDeck();
  }, [])

  const [pileCount, setPileCount] = useState(0);
  const [guess, setGuess] = useState();

  const handleDrawCard = () => {
    setPileCount(pileCount + 1);
    drawCard();
  }

  const setHi = () => setGuess('Hi');
  const setLo = () => setGuess('Lo');
  const getHi = () => guess === 'Hi';
  const getLo = () => guess === 'Lo';

  return (
    <Paper className={classes.gameBoard}>
      {loading &&
        <div className={classes.loader}>
          <ReactLoading
            type="spin"
            color="#282c34"
            height="32px"
            width="32px"
          />
        </div>
      }
      {!loading &&
        <div style={{ position: 'relative', top: '25px' }}>
          {currentCard &&
            <img src={currentCard.image} height="150" width="105" />
          }
          <div className={classes.textBox}>
            <div>
              <Button onClick={handleDrawCard}>
                Draw Card
            </Button>
            </div>
            <div style={{ color: '#282c34', fontSize: 'medium' }}>
              Your guess: {guess}
              <br />
              <IconButton onClick={setHi}>
                <ArrowDropUp
                  color={getHi() ? "primary" : 'disabled'}
                  fontSize='large'
                />
              </IconButton>
              <IconButton onClick={setLo}>
                <ArrowDropDown
                  color={getLo() ? "primary" : 'disabled'}
                  fontSize='large'
                />
              </IconButton>
              <br />
                Cards in Pile: {pileCount}
            </div>
          </div>
        </div>
      }
    </Paper>
  );
}

export default withStyles(styles)(GameBoard);
