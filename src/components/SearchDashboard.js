import React, { Component } from 'react'
import SortMenu from './SortMenu.js';
import { Button, TextField } from '@material-ui/core';
import { dashboardForm, searchMenuDiv } from '../data/constants.js';



export default class SearchDashboard extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSearchBarClick} style={dashboardForm}>
                <div style={searchMenuDiv}>
                    <TextField id="search-bar" label="search" value={this.props.storedSearchState.searchBarState} onChange={this.props.handleSearchBarChange} />
                    <SortMenu
                        id="search-category-label"
                        label="search category"
                        options={this.props.pokeCategoriesArray}
                        onChange={this.props.handleSearchCategoryChange}
                        value={this.props.storedSearchState.searchCategoryState.value}
                    />
                    <Button variant='contained' type='submit' color='primary'>Search</Button>
                </div>
                <div style={searchMenuDiv}>
                    <SortMenu
                        id="sort-category-label"
                        label="sort category"
                        options={this.props.pokeCategoriesArray}
                        onChange={this.props.handleSortCatergoryChange}
                        value={this.props.storedSearchState.sortCategoryState.value}
                    />

                    <SortMenu
                        id="sort-direction-label"
                        label="sort direction"
                        options={[{ key: 'ascending', value: 'asc' }, { key: 'descending', value: 'desc' }]}
                        onChange={this.props.handleSortOrderChange}
                        value={this.props.storedSearchState.sortOrderState}
                    />

                    <SortMenu
                        id="results-per-page"
                        label="results per page"
                        options={[{ key: '6', value: 6 }, { key: '12', value: 12 }, { key: '24', value: 24 }]}
                        onChange={this.props.handleResultsPerPageChange}
                        value={this.props.storedSearchState.resultsPerPageState} />

                    <Button variant='contained' type='submit' color='primary'>Sort</Button>
                </div>
            </form>
        )
    }
}
