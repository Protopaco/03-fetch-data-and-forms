import React, { Component } from 'react'

export default class Option extends Component {
    render() {
        return (
            <option value={this.props.value.value} >
                {this.props.value.key}
            </option>
        )
    }
}
