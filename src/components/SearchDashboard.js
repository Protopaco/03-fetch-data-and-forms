import React, { Component } from 'react'
import SearchBar from './SearchBar.js';
import SortMenu from './SortMenu.js';

export default class SearchDashboard extends Component {
    render() {
        return (
            <div>
                <SearchBar handleSearchBarChange={this.props.handleSearchBarChange} handleSearchBarClick={this.props.handleSearchBarClick} />
                <ul className="sort-ul">
                    <SortMenu options={[{ key: '<', value: '<' }, { key: '>', value: '>' }]} onChange={this.props.handleSortOrderChange} />
                    <SortMenu options={this.props.pokeCategoriesArray} onChange={this.props.handleSortCatergoryChange} />
                </ul>
            </div>
        )
    }
}
