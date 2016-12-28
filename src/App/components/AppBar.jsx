import React, { PropTypes } from 'react';
import { Menu } from 'semantic-ui-react';

// TODO: routing
const activeItem = 'manage';

const AppBar = ({ handleItemClick }) => (
  <Menu pointing secondary>
    <Menu.Item header><a href="#TODO">Wishlist App</a></Menu.Item>
    <Menu.Item name="MANAGE" active={activeItem === 'manage'} onClick={handleItemClick} />
    <Menu.Item name="PREVIEW" active={activeItem === 'preview'} onClick={handleItemClick} />
    <Menu.Menu position="right">
      <Menu.Item icon="" onClick={handleItemClick} />
      <Menu.Item name="signup" onClick={handleItemClick}>Sign Up</Menu.Item>
      <Menu.Item name="login" onClick={handleItemClick}>Log In</Menu.Item>
    </Menu.Menu>
  </Menu>
);

AppBar.propTypes = {
  handleItemClick: PropTypes.function,
};

export default AppBar;
