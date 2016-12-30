import React from 'react';
// import { Container } from 'semantic-ui-react';
import 'react-toolbox/lib/commons.scss';

import { AppBar } from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
// import AppBar from './components/AppBar';
// import SideBar from './components/SideBar';
// import Wishlist from '../Wishlist/Wishlist';
import style from './styles/App.scss';

// TODO multiple routes
const App = () => (
  <div className="App">

    {/*<AppBar className={style.appbar} title="Wishlist" leftIcon="menu" flat fixed>
      <Navigation type="horizontal">
        <div className={style.nav}>
          <ul>
            <li>
              <Link className={style.active} href="#TODO" active label="MANAGE" />
            </li>
            <li>
              <Link className={style.active} href="#TODO" label="PREVIEW" />
            </li>
          </ul>
        </div>
        <Link href="#TODO" label="Sign Up" icon="input" />
        <Link href="#TODO" label="Log In" icon="account circle" />
      </Navigation>
    </AppBar>*/}
    <AppBar title="React Toolbox" leftIcon="menu" rightIcon="input">
      <Navigation type="horizontal">
        <span className={style.foo}>Hello world</span>
        <Link href="http://" label="Inbox" icon="inbox" />
        <Link href="http://" active label="Profile" icon="person" />
      </Navigation>
    </AppBar>
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
