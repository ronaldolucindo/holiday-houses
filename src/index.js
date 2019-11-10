import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes';
import reducers from './reducers';
import rootSagas from './sagas';

import './index.css';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Provider store={store}>
    <CssBaseline />
    <Routes />
  </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
