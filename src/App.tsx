import React, { Component } from 'react';

import GameBoard from './components/GameBoard/GameBoardConnected';
import './App.css';
import Players from './components/Players/Players';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Players />
        <GameBoard />
      </div>
    );
  }
}

export default App;
