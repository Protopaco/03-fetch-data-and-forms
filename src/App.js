import './App.css';
import Header from './components/Header.js';
import Gallery from './components/Gallery.js';
import React from 'react';
import pokeArray from './data/poke-data.js';

export default class App extends React.Component {

  state = {
    displayItems: pokeArray,
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <Gallery displayItems={this.state.displayItems} />
      </div>
    );
  }
}
