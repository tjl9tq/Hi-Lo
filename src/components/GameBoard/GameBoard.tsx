import React, { Component, useEffect } from 'react';

import ReactLoading from 'react-loading';

import { Card } from '../../types';

export interface gameBoardProps {
  deckId: string,
  remainingCards: number,
  loading: boolean,
  currentCard: Card | null,
  getDeck: () => void;
  drawCard: () => void;
}


const GameBoard: React.SFC<gameBoardProps> = ( props ) => {
  useEffect(() => {
    props.getDeck();
  }, [])

  const handleDrawCard = () => props.drawCard();

  return (
    <div className="App">
      {props.loading &&
        <ReactLoading
          type="spin"
          color="#ffffff"
          height="32px"
          width="32px"
        />
      }
      {!props.loading &&
        <>
        {props.currentCard &&
          <img src={props.currentCard.image} height="150" width="105" />
        }
        <button onClick={handleDrawCard}>
          Draw Card
        </button>
        </>
      }
    </div>
    );
  }

export default GameBoard;
