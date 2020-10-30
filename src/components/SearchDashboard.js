import React, { Component } from 'react'
import SearchBar from './SearchBar.js';
import SortMenu from './SortMenu.js';

export default class SearchDashboard extends Component {
    render() {
        return (
            <form className='dashboard-div' onSubmit={this.props.handleSearchBarClick}>
                <span className="dashboard-label"> search </span>
                <SearchBar
                    handleSearchBarChange={this.props.handleSearchBarChange}
                    handleSearchBarClick={this.props.handleSearchBarClick}
                    searchBarCategories={this.props.pokeCategoriesArray}
                    handleSearchCategoryChange={this.props.handleSearchCategoryChange}
                />
                <span className="dashboard-label"> sort </span>
                <div className="dashboard-element">
                    <SortMenu
                        options={[{ key: '<', value: 'asc' }, { key: '>', value: 'desc' }]}
                        onChange={this.props.handleSortOrderChange}
                    />

                    <SortMenu
                        options={this.props.pokeCategoriesArray}
                        onChange={this.props.handleSortCatergoryChange}
                    />
                </div>
                <div></div>
                <button className="search-button" >Search</button>
            </form>
        )
    }
}
