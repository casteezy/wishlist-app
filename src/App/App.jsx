import React from 'react';
import AppBar from './components/AppBar';
import SideBar from './components/SideBar';
import Wishlist from '../Wishlist/Wishlist';
import './_App.scss';

// TODO multiple routes

const App = () => (
  <div className="App">
    <AppBar />
    <SideBar />
    <section className="App--Content">
      <Wishlist />
    </section>
  </div>
);

export default App;
