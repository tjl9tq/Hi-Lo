import React, { Component } from 'react';
import './App.css';

import ReactLoading from 'react-loading';

import * as api from './api';


interface AppProps {
  deck: any,
}

interface AppState {
  deck_id: string,
  remaining: number,
  loaded: boolean,
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      deck_id: '',
      remaining: 0,
      loaded: false,
    }

    this.handleDrawCard = this.handleDrawCard.bind(this);
  }

  componentDidMount() {
    api.getNewDeck().then(data => {
      this.setState({
        deck_id: data.deck_id,
        remaining: data.remaining,
        loaded: true,
      })
    })
  }

  handleDrawCard() {
    api.drawCard(this.state.deck_id)
  }

  render() {
    if (!this.state.loaded) {
      return (
        <div className="App">
        <ReactLoading
          type="spin"
          color="#ffffff"
          height="32px"
          width="32px"
        />
      </div>
      )
    }
    return (
      <div className="App">
        <button onClick={this.handleDrawCard}>
          Draw Card
        </button>
      </div>
    );
  }
}

export default App;
