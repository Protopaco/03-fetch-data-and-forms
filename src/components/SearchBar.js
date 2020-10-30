import React, { Component } from 'react'
import Option from './Option.js';

export default class SearchBar extends Component {


    render() {
        return (
            <div className="dashboard-element" >
                <input className="search-bar" onChange={this.props.handleSearchBarChange} />
                <select className="search-categories" onChange={this.props.handleSearchCategoryChange}>
                    {this.props.searchBarCategories.map((option, i) => {
                        return <Option value={option} key={i} />
                    })}
                </select>
            </div>
        )
    }
}
