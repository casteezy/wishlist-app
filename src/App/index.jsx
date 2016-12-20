import React, { Component } from 'react';
import WishlistViewContainer from '../WishlistView';

import './App.scss';

class App extends Component {
  render() {
    return (
            <div className="App">
                <WishlistViewContainer />
            </div>
    );
  }
}

export default App;
