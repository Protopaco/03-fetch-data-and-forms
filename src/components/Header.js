import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { headerFrame } from '../data/constants.js';
import { Paper, ButtonGroup, Button } from '@material-ui/core';


export default class Header extends Component {

    render() {
        return (
            <Paper style={headerFrame}>
                <ButtonGroup variant="text" color='primary' size="medium" aria-label='contained primary button group'>

                    <Button aria-label="home" component={Link} to='/' >
                        <HomeIcon />
                    </Button>

                    <Button aria-label="search" component={Link} to='/Search' >
                        <SearchIcon />
                    </Button>
                </ButtonGroup>
            </Paper>
        )
    }
}
