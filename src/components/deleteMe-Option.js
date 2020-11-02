import React, { Component } from 'react'
import { MenuItem } from '@material-ui/core';


export default class Option extends Component {
    render() {
        return (
            <MenuItem value='5' >
                {this.props.value.key}
            </MenuItem>
        )
    }
}

{/* <MenuItem value={this.props.value.value} >
{this.props.value.key}
</MenuItem> */}