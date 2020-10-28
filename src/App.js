import './App.css';
import Header from './components/Header.js';
import Gallery from './components/Gallery.js';
import React from 'react';
import pokeArray from './data/poke-data.js';
import SearchDashboard from './components/SearchDashboard';

export default class App extends React.Component {

  state = {
    displayItems: pokeArray,
    searchBarState: '',
    sortDirectionState: '',
  }

  searchBarChange = (e) => {
    this.setState({
      searchBarState: e.target.value,
    })
  }

  parseList = () => {
    const parsedList = pokeArray.filter((pokeListing) => {

      const enteredSearch = this.state.searchBarState;

      let searchCategory = 'type_1';

      if (pokeListing[searchCategory] === enteredSearch || !enteredSearch) {
        return true;
      }
      return false;
    })

    this.setState({
      displayItems: parsedList,
    })
  }

  render() {




    return (
      <div className="App" >
        <Header />
        <SearchDashboard searchBarClick={this.parseList} searchBarChange={this.searchBarChange} />
        <Gallery displayItems={this.state.displayItems} />

      </div>
    );
  }
}
