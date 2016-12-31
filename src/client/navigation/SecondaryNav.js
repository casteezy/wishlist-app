import React from 'react';
import { NavDrawer } from 'react-toolbox/lib/layout';
import { List, ListSubHeader, ListItem } from 'react-toolbox/lib/list';
import style from './SecondaryNav.scss';

const SecondaryNav = () => (
  <div>
    <NavDrawer
      pinned
      scrollY
    >
      <List selectable>
        <ListSubHeader className={style.subheader} caption="My Wishlists" />
        <ListItem
          caption="Dr Rorschach"
          rightIcon="star"
        />
        <ListItem
          caption="Ozymandias"
        />
        <ListItem
          caption="Rorschach"
        />
      </List>
    </NavDrawer>
  </div>
);

export default SecondaryNav;
