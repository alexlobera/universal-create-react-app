import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import App from '../shared/App';
import registerServiceWorker from './registerServiceWorker';
//import './index.css'; css-loader are disabed because they don't work on the server side

const rootEl = document.getElementById('root')

try {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <App />
      </Router>
    </AppContainer>,
    rootEl
  )
  if (module.hot) {
    const component = '../shared/App',
      callback = () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('../shared/App').default
        ReactDOM.render(
          <AppContainer>
            <Router>
              <NextApp />
            </Router>
          </AppContainer>,
          rootEl
        )
      }

    module.hot.accept(component, callback)
  }
} catch (error) {
  console.log(error)
}
/*
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
*/

registerServiceWorker();
