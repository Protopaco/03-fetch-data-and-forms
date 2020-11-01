import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core';
import { listItemCard, listItemImageDiv, listItemCardContent, listItemCardBreakDiv, secondaryAccentColor } from '../data/constants.js';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />




export default class ListItem extends Component {


    render() {

        return (
            <Link to={`/details/${(this.props.item._id)}`}>
                <li>
                    <Card style={{ ...listItemCard, backgroundColor: this.props.item.color_1 }} elevation={5}>
                        <div
                            style={{
                                ...listItemImageDiv,
                                backgroundImage: `url(${this.props.item.url_image})`
                            }}
                        />
                        <div style={listItemCardBreakDiv}
                        />
                        <CardContent
                            style={listItemCardContent}>
                            <Typography variant="h5" >{this.props.item.pokemon}</Typography>
                            <Typography >{this.props.displayCategory.key + ': ' + this.props.item[this.props.displayCategory.value]}</Typography>
                        </CardContent>
                    </Card>
                </li>
            </Link >
        )
    }
}
