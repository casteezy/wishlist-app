/* eslint-disable react/self-closing-comp */
import React, { PropTypes } from 'react';
// import { Container, Menu, Icon } from 'semantic-ui-react';
import { primaryColor } from '../../styles';
import '../styles/_AppBar.scss';

const activeItem = 'manage';

const AppBar = ({ handleItemClick }) => (
/*  <Menu className="AppBar" color={primaryColor} inverted pointing secondary fixed="top">
    <div className="AppBar--Spacer AppBar--Spacer__Logo"></div>

    <Menu.Item header className="AppBar--ItemGroup AppBar--ItemGroup__Logo">
      <Icon name="sidebar" />
      <span className="AppBar--Logo">
          Wishlist App
        </span>
    </Menu.Item>
    <Container>
      <Menu.Item name="MANAGE" active={activeItem === 'manage'} onClick={handleItemClick} />
      <Menu.Item name="PREVIEW" active={activeItem === 'preview'} onClick={handleItemClick} />

      <Menu.Menu className="AppBar--ItemGroup__Accounts" position="right">
        <Menu.Item name="signup" onClick={handleItemClick}>
          <Icon name="signup" /> Sign Up
        </Menu.Item>
        <Menu.Item name="login" onClick={handleItemClick}>
          <Icon name="user" />
          Log In
        </Menu.Item>
      </Menu.Menu>

    </Container>

    <div className="AppBar--Spacer AppBar--Spacer__Accounts"></div>
  </Menu>*/
  <div className="AppBar--Spacer AppBar--Spacer__Accounts"></div>
);

AppBar.propTypes = {
  handleItemClick: PropTypes.function,
};

AppBar.defaultProps = {
  handleItemClick: () => {
  },
};

export default AppBar;
