import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom'

import App from '../shared/App';
import registerServiceWorker from './registerServiceWorker';
//import './index.css'; css-loader are disabed because they don't work on the server side

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
