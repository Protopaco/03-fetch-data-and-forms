import React, { Component } from 'react'

export default class SearchBar extends Component {


    render() {
        return (
            <form onSubmit={this.props.handleSearchBarClick}>
                <input className="search-bar" onChange={this.props.handleSearchBarChange} />
                <button className="search-button" >Search</button>
            </form>
        )
    }
}
