import React, { Component } from 'react';
import WishlistView from '../WishlistView';
import './App.scss';

class App extends Component {
  render() {
    return (
        <div className="App">
          <WishlistView />
        </div>
    );
  }
}

export default App;
