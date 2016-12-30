import React from 'react';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

import theme from './AccountNavigationTheme.scss';
import style from './AccountNavigation.scss';

const AccountNavigation = () => (
  <Navigation theme={theme} className={style.navigation} type="horizontal">
    <Link className={style.link} href="#TODO" label="Sign Up" icon="input" />
    <Link className={style.link} href="#TODO" label="Log In" icon="account_circle" />
  </Navigation>
);

export default AccountNavigation;
