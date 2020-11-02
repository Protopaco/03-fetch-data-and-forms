import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { headerFrame } from '../data/constants.js';
import { Paper, ButtonGroup } from '@material-ui/core';


export default class Header extends Component {

    render() {
        return (
            <Paper style={headerFrame}>
                <ButtonGroup variant="text" color='primary' size="medium" aria-label='contained primary button group'>

                    <IconButton component={Link} to='/' >
                        <HomeIcon />
                    </IconButton>

                    <IconButton component={Link} to='/Search' >
                        <SearchIcon />
                    </IconButton>
                </ButtonGroup>
            </Paper>
        )
    }
}
