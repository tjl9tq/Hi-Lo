import React, { Component } from 'react';

import GameBoard from './components/GameBoard/GameBoardConnected';
import './App.css';
import Title from './components/Title/Title';
import Deck from './components/Deck/DeckConnected';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <GameBoard />
        <Deck />
      </div>
    );
  }
}

export default App;
