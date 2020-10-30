import React, { Component } from 'react'
import Option from './Option.js'

export default class SortMenu extends Component {
    render() {
        return (
            <select onChange={this.props.onChange} >
                {this.props.options.map((option, i) => {
                    return <Option value={option} key={i} />
                })}
            </select>
        )
    }
}
