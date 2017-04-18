import React from 'react';
import { Container } from 'semantic-ui-react';
import '../styles/App.scss';
import { AppBar, SideBar, Wishlist } from '../../wishlists';

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
