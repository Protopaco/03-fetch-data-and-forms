import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { primaryColorButton } from '../data/constants.js';
import { headerFrame } from '../data/constants.js';
import { Paper } from '@material-ui/core';


export default class Header extends Component {
    render() {
        return (
            <Paper style={headerFrame}>
                <Link to="/">
                    <Button variant="contained" style={primaryColorButton} >Home</Button>
                </Link>
                <Link to="/Search">
                    <Button variant="contained" style={primaryColorButton}>
                        Search</Button>
                </Link>
            </Paper>
        )
    }
}
