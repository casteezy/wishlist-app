import React from 'react';
import { Container } from 'semantic-ui-react';
import AppBar from './components/AppBar';
import SideBar from './components/SideBar';
import Wishlist from '../Wishlist/Wishlist';
import './styles/_App.scss';

// TODO multiple routes
const App = () => (
  <div className="App">
    <AppBar />
    <SideBar />
    <Container fluid>
      <section className="App--Content">
        <Wishlist />
      </section>
    </Container>
  </div>
);

export default App;
