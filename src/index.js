import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App/App';
import {createBrowserHistory} from 'history';
import ErrorBoundry from './components/Error-Boundry/Error-Boundry';
import store from './reducer/store';

import './index.css';

const history = createBrowserHistory();

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);