import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Link from 'react-toolbox/lib/link';
import AccountNavigation from './AccountNavigation';
import style from './MainAppBar.scss';

const MainAppBar = () => (
  <AppBar
    className={style.mainAppBar}
    title="Wishlist"
    leftIcon="menu"
  >
    <div className={style.nav}>
      <ul>
        <li>
          <Link className={style.active} href="#TODO" active label="MANAGE" />
        </li>
        <li>
          <Link href="#TODO" label="PREVIEW" />
        </li>
      </ul>
    </div>
    <AccountNavigation />
  </AppBar>
);


export default MainAppBar;

