import React, { Component } from 'react'

export default class NavButtons extends Component {
    render() {
        return (
            <ul className="nav-list">
                <li className='nav-listItems'>
                    <button onClick={this.props.handlePreviousPageClick}>previous</button>
                </li>
                <li className='nav-listItems'>
                    <span>{this.props.currentPageState}</span>
                </li>
                <li className='nav-listItems'>
                    <button onClick={this.props.handleNextPageClick}>next</button>
                </li>
            </ul>
        )
    }
}
