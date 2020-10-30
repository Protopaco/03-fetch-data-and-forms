import Gallery from './Gallery.js';
import React from 'react';
import searchableCategories from '../data/searchable-categories.js';
import SearchDashboard from './SearchDashboard.js';
import fetch from 'superagent';

export default class SearchPage extends React.Component {

    state = {
        displayedItems: '',
        searchBarState: '',
        searchCategoryState: { key: 'Name', value: 'pokemon' },
        sortOrderState: 'asc',
        sortCategoryState: { key: 'Name', value: 'pokemon' },
        loading: true,
    }

    handleSearchBarChange = (e) => {
        this.setState({
            searchBarState: e.target.value,
        })
    }

    handleSearchBarClick = async (e) => {
        e.preventDefault();
        await this.fetchPokemon();
    }

    handleSearchCategoryChange = (e) => {
        let tempObject = this.returnCategoryObject(e.target.value);
        console.log(tempObject);
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

    returnCategoryObject = (value) => {
        for (let object of searchableCategories) {
            if (object.value === value) {
                return object;
            }
        }
    }

    returnURL = () => {
        let url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?';
        url = url + this.state.searchCategoryState.value + '=' + this.state.searchBarState + '&';

        url = url + 'sort=' + this.state.sortCategoryState.value + '&direction=' + this.state.sortOrderState;
        alert(url);
        return url;
    }

    fetchPokemon = async () => {

        let url = this.returnURL();

        this.setState({
            loading: true,
        })

        const returnedPokemonObject = await fetch.get(url);
        if (returnedPokemonObject.body.results.length === 0) {
            alert('There are no results for your search, please try again')

        } else {
            const returnedPokemonArray = returnedPokemonObject.body.results;

            this.setState({
                displayedItems: returnedPokemonArray,
                loading: false,
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
                />
                {
                    this.state.loading
                        ? <img alt="pokemon-logo" className="pokemon-logo" src="/assets/spinner.gif" />
                        : <Gallery
                            displayItems={this.state.displayedItems}
                            displayCategory={this.state.sortCategoryState}
                        />
                }

            </div>
        );
    }
}
