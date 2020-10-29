import Gallery from './Gallery.js';
import React from 'react';
import pokeArray from '../data/poke-data.js';
import searchableCategories from '../data/searchable-categories.js';
import SearchDashboard from './SearchDashboard.js';
export default class SearchPage extends React.Component {

    state = {
        displayItems: pokeArray,
        searchBarState: '',
        sortOrderState: '<',
        sortCategoryState: 'type_1',
    }

    handleSearchBarChange = (e) => {
        this.setState({
            searchBarState: e.target.value,
        })
    }

    handleSearchBarClick = () => {
        alert(this.state.searchBarState)
    }


    handleSortOrderChange = (e) => {
        this.setState({
            sortOrderState: e.target.value,
        })
        alert(e.target.value)
    }

    handleSortCatergoryChange = (e) => {
        this.setState({
            sortCategoryState: e.target.value,
        })
        alert(e.target.value)
    }

    render() {
        return (
            <div className="SearchPage" >
                <SearchDashboard
                    handleSearchBarClick={this.handleSearchBarClick}
                    handleSearchBarChange={this.handleSearchBarChange}
                    handleSortOrderChange={this.handleSortOrderChange}
                    pokeCategoriesArray={searchableCategories}
                    handleSortCatergoryChange={this.handleSortCatergoryChange}
                />
                <Gallery displayItems={pokeArray} />

            </div>
        );
    }
}
