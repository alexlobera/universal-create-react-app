import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

//import './index.css'; css-loader are disabed because they don't work on the server side
import logo from './logo.svg';

const App = () => (
  <div className="App">
    <Route path="/" component={ ({ match }) => (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Universal React</h2>
        </div>
        <Route exact path="/" component={ ({ match }) => (
          <div className="App-intro">
            <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
            <Link to={`/test/123`}>
              Test page
            </Link>
          </div>
        )}/>
        <Route path="/test/:id" component={ ({ match }) => (
          <div className="App-intro">
            <p>
              Test page {match.params.id}
            </p>
            <Link to={`/`}>
              Home
            </Link>
          </div>
        )}/>
      </div>
    )}/>
  </div>
)

export default App
