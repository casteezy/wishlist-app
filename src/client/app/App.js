import React from 'react';
import { Layout, Panel } from 'react-toolbox/lib/layout';
import MainAppBar from '../navigation/MainAppBar';
import SecondaryNav from '../navigation/SecondaryNav';
import Wishlist from '../list/Wishlist';
import style from './App.scss';

const App = () => (
  <div className={style.app}>
    <Layout>
      <Panel>
        <MainAppBar />
        <div className={style.belowApp}>
          <SecondaryNav />
          <div className={style.content}>
            <Wishlist />
          </div>
        </div>
      </Panel>
    </Layout>
  </div>
);

export default App;
