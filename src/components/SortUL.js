import React, { Component } from 'react'
import SortMenu from './SortMenu.js';

export default class SortUL extends Component {


    render() {
        return (
            <ul className="sort-ul">
                <SortMenu options={[{ key: '<', value: '<' }, { key: '>', value: '>' }]} onChange={this.props.sortOrderChange} />
                <SortMenu options={this.props.pokeCategoriesArray} onChange={this.props.sortCategoryChange} />
            </ul>
        )
    }
}
