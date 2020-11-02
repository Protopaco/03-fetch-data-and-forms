import React, { Component } from 'react'
import { Paper } from '@material-ui/core';
import { elementFrame } from '../data/constants.js';


export default class LandingPage extends Component {
    render() {
        return (
            <Paper style={elementFrame}>
                <img alt="pokemon-logo" className="pokemon-logo" src="/assets/pokemon_logo_PNG6.png" />
            </Paper>
        )
    }
}
