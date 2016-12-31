import React from 'react';
import { Layout, Panel } from 'react-toolbox/lib/layout';
import MainAppBar from '../navigation/MainAppBar';
import SecondaryNav from '../navigation/SecondaryNav';
import style from './App.scss';

const App = () => (
  <div className={style.app}>
    <Layout>
      <Panel>
        <MainAppBar />
        <div className={style.belowApp}>
          <SecondaryNav />
          <div className={style.content}>
            <h1>Main Content</h1>
            <p>Main content goes here.</p>
          </div>
        </div>
      </Panel>
    </Layout>
  </div>
);

export default App;
