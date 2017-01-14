import React, { PropTypes } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import casual from 'casual-browserify';
import '../styles/SideBar.scss';

const dummyItems = [0, 1, 2, 3, 4].map(() => ({ title: casual.title }));

const SideBar = () => (
  <Menu inverted vertical className="SideBar" fixed="left">
    <Menu.Item>
      <Icon name="chevron up" />
      My Wishlists
      <Menu.Menu>
        {
          dummyItems.map(mItem => <Menu.Item
            key={mItem.title}
            name={mItem.title}
          >
            {mItem.title}
          </Menu.Item>)
        }
      </Menu.Menu>
    </Menu.Item>
    <Menu.Item name="following">
      <Icon name="chevron down" />
      Following
    </Menu.Item>
    <Menu.Item name="followers">
      <Icon name="chevron down" />
      Followers
    </Menu.Item>
    <Menu.Item name="giftExchanges">
      <Icon name="chevron down" />
      Gift Exchanges
    </Menu.Item>
  </Menu>
);

export default SideBar;
