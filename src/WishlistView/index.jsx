import React, {Component} from 'react';
import logo from '../App/logo.svg';
import './WishlistView.scss';

class WishlistView extends Component {
    render() {
        return (
            <div className="App WishlistView">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default WishlistView;