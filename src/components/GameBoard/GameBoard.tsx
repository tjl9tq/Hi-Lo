import React, { useEffect, useState } from 'react';

import ReactLoading from 'react-loading';

import { Card } from '../../types';
import { Paper, Button } from '@material-ui/core';
import {
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import { hiOrLo } from '../../helpers';
import Players from '../Players/Players';
import WinModal from '../WinModal/WinModal';
import GameBoardContent from './GameBoardContent';
import HowToPlay from '../HowToPlay/HowToPlay';

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
  resetPlayers: () => void;
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
  },
  options: {
    position: 'absolute',
    top: '20px',
    right: '30px',
  },
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
  remainingCards,
  resetPlayers,
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

  const gameOver = () => !loading && remainingCards === 0;

  const winner = () =>  {
    if (playerOnePoints < playerTwoPoints) {
      return '1';
    };
    if (playerOnePoints > playerTwoPoints) {
      return '2';
    }
    return 'none';
  };

  const resetGame = () => {
    if (currentCard) {
      getDeck();
      resetPlayers();
      setPileCount(-1);
    }
  }

  const handleGuess = () => {
    setPileCount(pileCount + 1);
    if (previousCard && currentCard) {
      const hiOrLoValue = hiOrLo(previousCard, currentCard)
      if (hiOrLoValue === guess) {
        setCorrectGuesses(correctGuesses + 1);
      } else if (hiOrLoValue !== 'neither' && hiOrLoValue !== guess) {
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
    if (getHi() || getLo() || pileCount === 0) {
      drawCard();
    }
  }

  const handlePassTurn = () => {
    setCorrectGuesses(0);
    changeTurns();
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
          <GameBoardContent
            currentCard={currentCard}
            handleDrawCard={handleDrawCard}
            guess={guess}
            getHi={getHi}
            getLo={getLo}
            setHi={setHi}
            setLo={setLo}
            pileCount={pileCount}
            correctGuesses={correctGuesses}
          />
        }
      </Paper>
      <Players
        playerOnePoints={playerOnePoints}
        playerTwoPoints={playerTwoPoints}
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.passButton}
        onClick={handlePassTurn}
        disabled={!(correctGuesses > 2)}
      >
        Pass Turn 
      </Button>
      <div className={classes.options}>
        <HowToPlay />
        <Button
          onClick={resetGame}
          color="primary"
        >
          Restart Game 
        </Button>
      </div>

      <WinModal
        open={gameOver()}
        winner={winner()}
        resetGame={resetGame}
      />
    </>
  );
}

export default withStyles(styles)(GameBoard);
