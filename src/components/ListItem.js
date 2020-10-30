import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        const liStyle = { backgroundColor: this.props.item.color_1 };
        return (
            <li className="listing-li" style={liStyle}>
                <img className="listing-image" src={this.props.item.url_image} alt={this.props.item.pokemon} />
                <p className="listing-name">{this.props.item.pokemon}</p>
                <p className="listing-info">{this.props.displayCategory.key + ': ' + this.props.item[this.props.displayCategory.value]}</p>
            </li>
        )
    }
}
