import * as React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import App from './App';
import thunk from 'redux-thunk';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
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
