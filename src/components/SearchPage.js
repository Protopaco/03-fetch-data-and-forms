import Gallery from './Gallery.js';
import React from 'react';
import searchableCategories from '../data/searchable-categories.js';
import SearchDashboard from './SearchDashboard.js';
import NavButtons from './NavButtons.js';
import fetch from 'superagent';
import { Paper } from '@material-ui/core';
import { elementFrame } from '../data/constants.js';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

export default class SearchPage extends React.Component {

    state = {
        loading: true,
    }

    handleSearchBarChange = (e) => {
        this.props.handleStoreSearchState({
            searchBarState: e.target.value,
        })
    }

    handleSearchBarClick = async (e) => {
        e.preventDefault();

        await this.props.handleStoreSearchState({
            currentPageState: 1
        })
        await this.fetchPokemon();

    }

    handleSearchCategoryChange = (e) => {
        let tempObject = this.returnCategoryObject(e.target.value);
        this.props.handleStoreSearchState({
            searchCategoryState: tempObject,
        })
    }

    handleSortOrderChange = (e) => {
        this.props.handleStoreSearchState({
            sortOrderState: e.target.value,
        })
    }

    handleSortCatergoryChange = (e) => {
        let tempObject = this.returnCategoryObject(e.target.value);
        this.props.handleStoreSearchState({
            sortCategoryState: tempObject,
        })
    }

    handleResultsPerPageChange = (e) => {
        this.props.handleStoreSearchState({
            resultsPerPageState: e.target.value,
        })
    }

    handleNextPageClick = async (e) => {
        e.preventDefault();

        const tempValue = this.props.storedSearchState.currentPageState + 1;
        await this.props.handleStoreSearchState({
            currentPageState: tempValue,
        })

        await this.fetchPokemon();
    }

    handlePreviousPageClick = async (e) => {
        e.preventDefault();

        if (this.props.storedSearchState.currentPageState > 1) {
            const tempValue = this.props.storedSearchState.currentPageState - 1;
            await this.props.handleStoreSearchState({
                currentPageState: tempValue,
            })
            await this.fetchPokemon();


        } else {
            alert('already on first page')
        }
    }

    returnCategoryObject = (value) => {
        for (let object of searchableCategories) {
            if (object.value === value) {
                return object;
            }
        }
    }

    returnURL = () => {
        // Base API URL
        let url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?';

        // Adds search parameters
        url = url + this.props.storedSearchState.searchCategoryState.value + '=' + this.props.storedSearchState.searchBarState + '&';

        // adds sort parameters
        url = url + 'sort=' + this.props.storedSearchState.sortCategoryState.value + '&direction=' + this.props.storedSearchState.sortOrderState;

        // adds page parameters
        url = url + '&page=' + this.props.storedSearchState.currentPageState + '&perPage=' + this.props.storedSearchState.resultsPerPageState;

        // alert(url);
        return url;
    }

    fetchPokemon = async () => {

        let url = this.returnURL();

        await this.setState({
            loading: true,
        })

        const returnedPokemonObject = await fetch.get(url);
        // alerts user if there are no results are returned
        if (returnedPokemonObject.body.results.length === 0) {
            alert('There are no results for your search, please try again')

        } else {
            const returnedPokemonArray = returnedPokemonObject.body.results;

            await this.props.handleStoreSearchState({
                displayedItems: returnedPokemonArray,
                totalReturnsState: returnedPokemonObject.body.count
            });
            await this.setState({
                loading: false,
            })
        }
    }

    componentDidMount = async () => {
        await this.fetchPokemon();

    }

    render() {
        return (
            <Paper style={elementFrame}>
                <SearchDashboard
                    handleSearchBarClick={this.handleSearchBarClick}
                    handleSearchBarChange={this.handleSearchBarChange}
                    handleSortOrderChange={this.handleSortOrderChange}
                    pokeCategoriesArray={searchableCategories}
                    handleSortCatergoryChange={this.handleSortCatergoryChange}
                    handleSearchCategoryChange={this.handleSearchCategoryChange}
                    handleResultsPerPageChange={this.handleResultsPerPageChange}
                    storedSearchState={this.props.storedSearchState}
                />
                {
                    this.state.loading
                        ? <img alt="spinner" className="spinner" src="/assets/spinner.gif" />
                        : <>
                            <Gallery
                                displayItems={this.props.storedSearchState.displayedItems}
                                displayCategory={this.props.storedSearchState.sortCategoryState}
                            />
                            <NavButtons
                                handlePreviousPageClick={this.handlePreviousPageClick}
                                handleNextPageClick={this.handleNextPageClick}
                                currentPageState={this.props.storedSearchState.currentPageState}
                                totalReturnsState={this.props.storedSearchState.totalReturnsState}
                                resultsPerPageState={this.props.storedSearchState.resultsPerPageState}
                            />
                        </>
                }

            </Paper>
        );
    }
}
