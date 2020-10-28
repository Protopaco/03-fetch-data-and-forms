import React, { Component } from 'react'
import ListItem from './ListItem.js';

export default class Gallery extends Component {
    render() {
        return (
            <ul className="gallery-ul">
                {this.props.displayItems.map((item, i) => {
                    return <ListItem item={item} key={i} />
                })}
            </ul>
        )
    }
}
