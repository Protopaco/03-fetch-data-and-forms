import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { primaryColorButton } from '../data/constants.js';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


export default class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/">
                    <Button variant="contained" style={primaryColorButton} >Home</Button>
                </Link>
                <Link to="/Search">
                    <Button variant="contained" style={primaryColorButton}>
                        Search</Button>
                </Link>
            </header>
        )
    }
}
