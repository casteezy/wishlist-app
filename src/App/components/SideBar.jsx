import React, { PropTypes } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import casual from 'casual-browserify';

const dummyItems = [0, 1, 2, 3, 4].map(idx => ({ title: casual.title }));

const SideBar = ({ handleItemClick, children }) => (
  <Menu className="SideBar" vertical fixed="left">
    <Menu.Item>
      <Icon name="chevron up" />
      My Wishlists
      <Menu.Menu>
        {
          dummyItems.map(mItem => <Menu.Item
            name={mItem.title}
            onClick={handleItemClick}
          >
            {mItem.title}
          </Menu.Item>)
        }
      </Menu.Menu>
    </Menu.Item>
    <Menu.Item name="following" onClick={handleItemClick}>
      <Icon name="chevron down" />
      Following
    </Menu.Item>
    <Menu.Item name="followers" onClick={handleItemClick}>
      <Icon name="chevron down" />
      Followers
    </Menu.Item>
    <Menu.Item name="giftExchanges" onClick={handleItemClick}>
      <Icon name="chevron down" />
      Gift Exchanges
    </Menu.Item>
  </Menu>
);

SideBar.propTypes = {
  handleItemClick: PropTypes.function,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default SideBar;
