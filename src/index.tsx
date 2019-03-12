import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

interface DevToolsWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}
declare let window: DevToolsWindow;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(thunk),
  ));

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  </Provider>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
