import React, { Component } from 'react'
import SearchBar from './SearchBar.js';

export default class SearchDashboard extends Component {
    render() {
        return (
            <div>
                <SearchBar searchBarClick={this.props.searchBarClick} searchBarChange={this.props.searchBarChange} />
            </div>
        )
    }
}
