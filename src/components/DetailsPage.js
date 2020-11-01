import React, { Component } from 'react'
import fetch from 'superagent';
import { Link } from 'react-router-dom';

export default class DetailsPage extends Component {

    state = {
        pokemonObject: { pokemon: 'failure' }
    }

    componentDidMount = async () => {

        const pokemon_id = this.props.match.params.pokemon_id;

        let url = `https://alchemy-pokedex.herokuapp.com/api/pokedex/${pokemon_id}`

        const returnedPokemonObject = await fetch.get(url);

        await this.setState({
            pokemonObject: returnedPokemonObject.body
        })
    }
    render() {
        return (
            <div className='SearchPage'>
                <div className='details-div' style={{ backgroundColor: this.state.pokemonObject.color_1, border: this.state.pokemonObject.color_2 }} >
                    <ul className='details-ul'>
                        <li className="details-info">
                            <img className="details-image" src={this.state.pokemonObject.url_image} alt={this.state.pokemonObject.pokemon} />
                        </li>
                        <li className="details-info">Name: {this.state.pokemonObject.pokemon}</li>
                        <li className="details-info">HP: {this.state.pokemonObject.hp}</li>
                        <li className="details-info">Attack: {this.state.pokemonObject.attack}</li>
                        <li className="details-info">Defense: {this.state.pokemonObject.defense}</li>
                        <li className="details-info">Height: {this.state.pokemonObject.height}</li>
                        <li className="details-info">Weight: {this.state.pokemonObject.weight}</li>
                    </ul>
                </div>
                <Link to="/Search">back</Link>
            </div>
        )
    }
}
