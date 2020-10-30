import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/"><span className="header-links">Home</span></Link>
                <Link to="/Search"><span className="header-links">Search</span></Link>
            </header>
        )
    }
}
