import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <li className="listing-li">
                <img className="listing-image" src={this.props.item.url_image} alt={this.props.item.pokemon} />
                <p className="listing-name">{this.props.item.pokemon}</p>
                <p className="listing-info">{this.props.item.type_1}</p>
            </li>
        )
    }
}
