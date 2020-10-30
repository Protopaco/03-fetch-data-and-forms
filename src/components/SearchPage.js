import Gallery from './Gallery.js';
import React from 'react';
import pokeArray from '../data/poke-data.js';
import searchableCategories from '../data/searchable-categories.js';
import SearchDashboard from './SearchDashboard.js';
import fetch from 'superagent';

export default class SearchPage extends React.Component {

    state = {
        displayedItems: '',
        searchBarState: '',
        sortOrderState: 'asc',
        sortCategoryState: { key: 'Name', value: 'type_1' },
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
        let url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

        url = url + '?' + this.state.sortCategoryState.value + '=' + this.state.searchBarState;


        url = url + '&sort=' + this.state.sortOrderState;
        alert(url);
        return url;
    }

    fetchPokemon = async () => {
        let url = this.returnURL();
        this.setState({
            loading: true,
        })
        const returnedPokemonArray = await fetch.get(url);
        this.setState({
            displayedItems: returnedPokemonArray.body.results,
            loading: false,
        });
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
                />
                {
                    this.state.loading
                        ? <img alt="pokemon-logo" className="pokemon-logo" src="/assets/pokemon_logo_PNG6.png" />
                        : <Gallery
                            displayItems={this.state.displayedItems}
                            displayCategory={this.state.sortCategoryState}
                        />
                }

            </div>
        );
    }
}
