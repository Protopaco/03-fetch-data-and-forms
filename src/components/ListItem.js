import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';


export default class ListItem extends Component {


    render() {

        return (
            <Link to={`/details/${(this.props.item._id)}`}>
                <li className="listing-li" style={{ backgroundColor: this.props.item.color_1 }}>
                    <img className="listing-image" src={this.props.item.url_image} alt={this.props.item.pokemon} />
                    <p className="listing-name">{this.props.item.pokemon}</p>
                    <p className="listing-info">{this.props.displayCategory.key + ': ' + this.props.item[this.props.displayCategory.value]}</p>
                </li>
            </Link>
        )
    }
}
