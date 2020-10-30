import Gallery from './Gallery.js';
import React from 'react';
import searchableCategories from '../data/searchable-categories.js';
import SearchDashboard from './SearchDashboard.js';
import NavButtons from './NavButtons.js';
import fetch from 'superagent';

export default class SearchPage extends React.Component {

    state = {
        displayedItems: '',
        searchBarState: '',
        searchCategoryState: { key: 'Name', value: 'pokemon' },
        sortOrderState: 'asc',
        sortCategoryState: { key: 'Name', value: 'pokemon' },
        resultsPerPageState: 5,
        currentPageState: 1,
        totalReturnsState: 0,
        loading: true,
    }

    handleSearchBarChange = (e) => {
        this.setState({
            searchBarState: e.target.value,
        })
    }

    handleSearchBarClick = async (e) => {
        e.preventDefault();

        await this.setState({
            currentPageState: 1
        })
        await this.fetchPokemon();
    }

    handleSearchCategoryChange = (e) => {
        let tempObject = this.returnCategoryObject(e.target.value);
        this.setState({
            searchCategoryState: tempObject,
        })
    }

    handleSortOrderChange = (e) => {
        this.setState({
            sortOrderState: e.target.value,
        })
    }

    handleSortCatergoryChange = (e) => {
        let tempObject = this.returnCategoryObject(e.target.value);
        this.setState({
            sortCategoryState: tempObject,
        })
    }

    handleResultsPerPageChange = (e) => {
        this.setState({
            resultsPerPageState: e.target.value,
        })
    }

    handleNextPageClick = async (e) => {
        e.preventDefault();

        const tempValue = this.state.currentPageState + 1;
        await this.setState({
            currentPageState: tempValue,
        })

        await this.fetchPokemon();
    }

    handlePreviousPageClick = async (e) => {
        e.preventDefault();

        if (this.state.currentPageState > 1) {
            const tempValue = this.state.currentPageState - 1;
            await this.setState({
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
        url = url + this.state.searchCategoryState.value + '=' + this.state.searchBarState + '&';

        // adds sort parameters
        url = url + 'sort=' + this.state.sortCategoryState.value + '&direction=' + this.state.sortOrderState;

        // adds page parameters
        url = url + '&page=' + this.state.currentPageState + '&perPage=' + this.state.resultsPerPageState;

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

            await this.setState({
                displayedItems: returnedPokemonArray,
                loading: false,
                totalReturnsState: returnedPokemonObject.body.count
            });
        }
    }



    componentDidMount = async () => {
        await this.fetchPokemon();

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
                    handleSearchCategoryChange={this.handleSearchCategoryChange}
                    handleResultsPerPageChange={this.handleResultsPerPageChange}
                />
                {
                    this.state.loading
                        ? <img alt="spinner" className="spinner" src="/assets/spinner.gif" />
                        : <>
                            <Gallery
                                displayItems={this.state.displayedItems}
                                displayCategory={this.state.sortCategoryState}
                            />
                            <NavButtons
                                handlePreviousPageClick={this.handlePreviousPageClick}
                                handleNextPageClick={this.handleNextPageClick}
                                currentPageState={this.state.currentPageState}
                                totalReturnsState={this.state.totalReturnsState}
                                resultsPerPageState={this.state.resultsPerPageState}
                            />
                        </>
                }

            </div>
        );
    }
}
