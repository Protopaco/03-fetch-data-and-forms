import React, { Component } from 'react'
import GeneratedListItem from './ListItem.js';
import { List } from '@material-ui/core';
import { galleryList } from '../data/constants.js'


export default class Gallery extends Component {
    render() {
        return (
            <List style={galleryList}>
                {this.props.displayItems.map((item, i) => {
                    return <GeneratedListItem displayCategory={this.props.displayCategory}
                        item={item} key={i} />
                })}
            </List>
        )
    }
}
