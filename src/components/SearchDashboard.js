import React, { Component } from 'react'
import SearchBar from './SearchBar.js';
import SortUL from './SortUL.js';

export default class SearchDashboard extends Component {
    render() {
        return (
            <div>
                <SearchBar searchBarClick={this.props.searchBarClick} searchBarChange={this.props.searchBarChange} />
                <SortUL sortOrderChange={this.props.sortOrderChange}
                    pokeCategoriesArray={this.props.pokeCategoriesArray}
                    sortCategoryChange={this.props.sortCategoryChange} />
            </div>
        )
    }
}
