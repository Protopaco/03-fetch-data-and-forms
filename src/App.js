import './App.css';
import Header from './components/Header.js';
import Gallery from './components/Gallery.js';
import React from 'react';
import pokeArray from './data/poke-data.js';
import searchableCategories from './data/searchable-categories.js';
import SearchDashboard from './components/SearchDashboard.js';
import parseList from './utils/parse-list.js'

export default class App extends React.Component {

  state = {
    displayItems: pokeArray,
    searchBarState: '',
    sortOrderState: '<',
    sortCategoryState: 'type_1',
  }

  searchBarChange = (e) => {
    this.setState({
      searchBarState: e.target.value,
    })

  }

  sortOrderChange = (e) => {
    this.setState({
      sortOrderState: e.target.value,
    })
    let sortedList = parseList(this.state.sortCategoryState, pokeArray, this.state.searchBarState, this.state.sortOrderState)
    this.updateDisplayItems(sortedList);


  }

  sortCategoryChange = (e) => {
    this.setState({
      sortCategoryState: e.target.value,
    })
    let sortedList = parseList(this.state.sortCategoryState, pokeArray, this.state.searchBarState, this.state.sortOrderState)
    this.updateDisplayItems(sortedList);
  }

  updateDisplayItems(sortedList) {
    this.setState({
      displayItems: sortedList,
    })
  }

  render() {


    return (
      <div className="App" >
        <Header />
        <SearchDashboard searchBarClick={this.searchBarChange}
          searchBarChange={this.searchBarChange}
          sortOrderChange={this.sortOrderChange}
          pokeCategoriesArray={searchableCategories}
          sortCategoryChange={this.sortCategoryChange}
        />
        <Gallery displayItems={parseList(this.state.sortCategoryState, pokeArray, this.state.searchBarState, this.state.sortOrderState)} />

      </div>
    );
  }
}
