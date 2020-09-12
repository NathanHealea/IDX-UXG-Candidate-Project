// --- Imports --- //
import React from 'react';
import ReactDOM from 'react-dom';

// --- Store Imports --- //
import { Provider } from 'react-redux';
import store from './store';

// --- Material Ui -- //
import { ThemeProvider, CssBaseline } from '@material-ui/core/';
import { Main } from './themes';

// --- Custom Component Import --- //
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={Main}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
