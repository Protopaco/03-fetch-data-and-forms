import React, { Component } from 'react'
import fetch from 'superagent';
import { Link } from 'react-router-dom';
import { Paper, Card, Typography, CardContent, Button } from '@material-ui/core';
import { elementFrame, detailItemCard, detailItemImageDiv, detailItemCardBreakDiv, listItemCardContent } from '../data/constants.js';


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
            <Paper style={elementFrame} elevation={5}>
                <Card elevation={5} style={{ ...detailItemCard, backgroundColor: this.state.pokemonObject.color_1 }}>
                    <div
                        style={{
                            ...detailItemImageDiv,
                            backgroundImage: `url(${this.state.pokemonObject.url_image})`
                        }}>

                    </div>
                    <div style={detailItemCardBreakDiv}></div>
                    <CardContent style={listItemCardContent}>
                        <Typography variant="h2" >
                            {this.state.pokemonObject.pokemon}
                        </Typography>
                        <Typography variant="h5" >
                            {`type: ${this.state.pokemonObject.type_1}`}
                        </Typography>
                        <Typography variant="h5" >
                            {`hp: ${this.state.pokemonObject.hp}`}
                        </Typography>
                        <Typography variant="h5" >
                            {`height: ${this.state.pokemonObject.height}`}
                        </Typography>
                        <Typography variant="h5" >
                            {`weight: ${this.state.pokemonObject.weight}`}
                        </Typography>
                        <Typography variant="h5" >
                            {`ability: ${this.state.pokemonObject.ability_1}`}
                        </Typography>
                        <Typography variant="h5" >
                            {`egg group: ${this.state.pokemonObject.egg_group_1}`}
                        </Typography>
                        <Typography variant="h5" >
                            {`generation: ${this.state.pokemonObject.generation_id}`}
                        </Typography>
                    </CardContent>
                </Card>

                {/* <div className='details-div' style={{ backgroundColor: this.state.pokemonObject.color_1, border: this.state.pokemonObject.color_2 }} >
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
                </div> */}
                <Button variant='contained' color='primary' component={Link} to="/Search" style={{ marginTop: '0px' }}>back</Button>
            </Paper>
        )
    }
}
