import React, { Component } from 'react'
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { inputStyle } from '../data/constants.js';


export default class SortMenu extends Component {
    render() {
        return (
            <FormControl >
                <InputLabel id={this.props.id} style={{ marginLeft: '10px' }}>{this.props.label}</InputLabel>

                <Select
                    labelId={this.props.id}
                    style={{ minWidth: '150px', marginLeft: '10px' }}
                    id={this.props.id}
                    onChange={this.props.onChange}
                    value={this.props.value}>

                    {this.props.options.map((option, i) => {
                        return <MenuItem key={i} value={option.value} >
                            {option.key}
                        </MenuItem>
                    })}
                </Select>
            </FormControl >
        )
    }
}
