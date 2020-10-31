import React, { Component } from 'react'

export default class NavButtons extends Component {
    render() {
        return (
            <ul className="nav-list">
                <li className='nav-listItems'>
                    <button
                        onClick={this.props.handlePreviousPageClick}
                        disabled={this.props.currentPageState === 1}
                    >previous
                    </button>
                </li>
                <li className='nav-listItems'>
                    <span className='nav-display'>{this.props.currentPageState} / {Math.ceil(this.props.totalReturnsState / this.props.resultsPerPageState)}</span>
                </li>
                <li className='nav-listItems'>
                    <button
                        onClick={this.props.handleNextPageClick}
                        disabled={this.props.currentPageState === Math.ceil(this.props.totalReturnsState / this.props.resultsPerPageState)}
                    >next
                    </button>
                </li>
            </ul>
        )
    }
}
