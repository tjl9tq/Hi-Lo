import React, { Component } from 'react';

import GameBoard from './components/GameBoard/GameBoardConnected';
import './App.css';
import Players from './components/Players/Players';
import Title from './components/Title/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Players />
        <GameBoard />
      </div>
    );
  }
}

export default App;
