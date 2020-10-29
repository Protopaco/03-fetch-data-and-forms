import React, { Component } from 'react'

export default class SearchBar extends Component {


    render() {
        return (
            <div>
                <input className="search-bar" onChange={this.props.searchBarChange} />
                <button className="search-button" onClick={this.props.searchBarClick}>Search</button>
            </div>
        )
    }
}
