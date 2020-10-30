import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SearchPage from './components/SearchPage.js';
import LandingPage from './components/LandingPage.js';
import Header from './components/Header.js';


export default class App extends Component {
  render() {
    return (
      <div className="searchpage-main">
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <LandingPage {...routerProps} />}
            />
            <Route
              path="/search"
              exact
              render={(routerProps) => <SearchPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}