import React from 'react';
// import { Container } from 'semantic-ui-react';
import { Button } from 'react-toolbox/lib/button';
// import AppBar from './components/AppBar';
// import SideBar from './components/SideBar';
// import Wishlist from '../Wishlist/Wishlist';
import styles from './styles/_App.scss';

// TODO multiple routes
const App = () => (
  <div className="App">
    <span className={styles.foo}>foo bar</span>
    <Button>Hello world</Button>
    {/* <AppBar />
    <SideBar />
    <Container fluid>
      <section className="App--Content">
        <Wishlist />
      </section>
    </Container>*/}
  </div>
);

export default App;
