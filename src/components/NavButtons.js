import React, { Component } from 'react'
import { Link, } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { ButtonGroup, Button } from '@material-ui/core';


export default class NavButtons extends Component {
    render() {
        return (
            <ButtonGroup
                variant="text"
                color='primary'
                size="large"
                aria-label='contained primary button group'>
                <IconButton
                    component={Link}
                    onClick={this.props.handlePreviousPageClick}
                    disabled={this.props.currentPageState === 1}
                >
                    <ChevronLeft />
                </IconButton>
                <Button>
                    {this.props.currentPageState} / {Math.ceil(this.props.totalReturnsState / this.props.resultsPerPageState)}
                </Button>
                <IconButton
                    component={Link}
                    onClick={this.props.handleNextPageClick}
                    disabled={this.props.currentPageState === Math.ceil(this.props.totalReturnsState / this.props.resultsPerPageState)}
                >
                    <ChevronRight />
                </IconButton>
            </ButtonGroup>
        )
    }
}
