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
import { hiOrLo } from '../../helpers';
import Players from '../Players/Players';

export interface gameBoardProps {
  currentCard: Card | null,
  playerOneTurn: boolean,
  loading: boolean,
  remainingCards: number,
  playerOnePoints: number,
  playerTwoPoints: number,
}

export interface gameBoardHandlers {
  getDeck: () => void;
  drawCard: () => void;
  changeTurns: () => void;
  setPlayerOnePoints: (points: number) => void;
  setPlayerTwoPoints: (points: number) => void;
}

const styles = createStyles({
  gameBoard: {
    height: '375px',
    width: '200px',
  },
  gameBoardContent: {
    position: 'relative',
    top: '25px',
    color: '#282c34',
    fontSize: 'medium'
  },
  loader: {
    position: 'relative',
    left: '80px',
    top: '100px',
  },
  textBox: {
    position: 'absolute',
    top: '170px',
    left: '37px',
  },
  passButton: {
    position: 'relative',
    bottom: '35px'
  },
  playerTurn: {
    paddingBottom: '10px',
  }
})

type Props = WithStyles<typeof styles> & gameBoardProps & gameBoardHandlers;

const GameBoard: React.SFC<Props> = ({
  currentCard,
  playerOneTurn,
  drawCard,
  getDeck,
  loading,
  classes,
  setPlayerOnePoints,
  setPlayerTwoPoints,
  playerOnePoints,
  playerTwoPoints,
  changeTurns,
}) => {
  useEffect(() => {
    getDeck();
  }, [])

  useEffect(() => {
    handleGuess();
  }, [currentCard])

  const [pileCount, setPileCount] = useState(-1);
  const [guess, setGuess] = useState();
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [previousCard, setPreviousCard] = useState();

  const setHi = () => setGuess('Hi');
  const setLo = () => setGuess('Lo');
  const getHi = () => guess === 'Hi';
  const getLo = () => guess === 'Lo';
  const clearGuess = () => setGuess('');

  const handleGuess = () => {
    setPileCount(pileCount + 1);
    if (previousCard && currentCard) {
      if (hiOrLo(previousCard, currentCard) === guess) {
        setCorrectGuesses(correctGuesses + 1);
      } else {
        handleIncorrectGuess();
      };
    }
    setPreviousCard(currentCard);
    clearGuess();
  }

  const handleIncorrectGuess = () => {
    if (playerOneTurn) {
      setPlayerOnePoints(playerOnePoints + pileCount);
    } else {
      setPlayerTwoPoints(playerTwoPoints + pileCount);
    }
    setPileCount(1);
    setCorrectGuesses(0);
    changeTurns();
  }

  const handleDrawCard = () => {
    if (getHi() || getLo() || pileCount === 0){
      drawCard();
    }
  }

  return (
    <>
      <div className={classes.playerTurn}>
        Current Turn: Player {playerOneTurn ? 1 : 2}
      </div>
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
          <div className={classes.gameBoardContent}>
            {currentCard &&
              <img src={currentCard.image} height="150" width="105" />
            }
            <div className={classes.textBox}>
              <div>
                <Button onClick={handleDrawCard}>
                  Draw Card
                </Button>
              </div>
              <div>
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
                <br />
                Correct Guesses: {correctGuesses}
              </div>
            </div>
          </div>
        }
      </Paper>
      <Players
        playerOnePoints={playerOnePoints}
        playerTwoPoints={playerTwoPoints}
      />
      { correctGuesses > 2 &&
        <Button
          variant="contained"
          className={classes.passButton}
          onClick={changeTurns}
        >
          Pass Turn
        </Button>
      }
    </>
  );
}

export default withStyles(styles)(GameBoard);
