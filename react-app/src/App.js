import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import history from './history';

import logo from './logo.svg';
import './App.css';

const Main = (props) => <h1>Main</h1>;

const Other = () => <h1>Other</h1>;

class App extends Component {
  page(route) {
    history.push(route);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Router history={history} basename="/react-app/build/">
            <div>
              <Route path="/main" component={Main} />
              <Route path="/other" component={Other} />
            </div>
          </Router>
          <button onClick={() => this.page('/main')}>Main</button>
          <button onClick={() => this.page('/other')}>Other</button>
        </header>
      </div>
    );
  }
}

export default App;
