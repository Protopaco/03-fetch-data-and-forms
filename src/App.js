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
import DetailsPage from './components/DetailsPage.js';


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
            <Route
              path="/details/:pokemon_id"
              exact
              render={(routerProps) => <DetailsPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}