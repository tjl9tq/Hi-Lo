import React, { Component, useEffect } from 'react';

import ReactLoading from 'react-loading';

import { Card } from '../../types';
import { Paper, Button } from '@material-ui/core';

export interface gameBoardProps {
  deckId: string,
  remainingCards: number,
  loading: boolean,
  currentCard: Card | null,
  getDeck: () => void;
  drawCard: () => void;
}


const GameBoard: React.SFC<gameBoardProps> = (props) => {
  useEffect(() => {
    props.getDeck();
  }, [])

  const handleDrawCard = () => props.drawCard();

  return (
    <Paper
      style={{ height: '300px', width: '200px' }}
    >
      {props.loading &&
        <ReactLoading
          type="spin"
          color="#ffffff"
          height="32px"
          width="32px"
        />
      }
      {!props.loading &&
        <div style={{ position: 'relative', top: '50px' }}>
          {props.currentCard &&
            <img src={props.currentCard.image} height="150" width="105" />
          }
          <div>
            <Button onClick={handleDrawCard}>
              Draw Card
            </Button>
          </div>
        </div>
      }
    </Paper>
  );
}

export default GameBoard;
