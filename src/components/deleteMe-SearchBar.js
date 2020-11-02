import React, { Component } from 'react'
import SortMenu from './SortMenu.js';

export default class SearchBar extends Component {


    render() {
        return (
            <div className="dashboard-element" >
                <input className="search-bar" onChange={this.props.handleSearchBarChange} />
                {/* <SortMenu onChange={this.props.handleSearchCategoryChange}>
                    {this.props.searchBarCategories.map((option, i) => {
                        return <MenuItem value={option} key={i} />
                    })}
                </SortMenu> */}
            </div>
        )
    }
}
