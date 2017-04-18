/* eslint-disable react/self-closing-comp */
import React, { PropTypes } from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';
import '../styles/AppBar.scss';

const activeItem = 'manage';

const AppBar = () => (
  <Menu className="AppBar" color="violet" inverted pointing secondary fixed="top">
    <div className="AppBar--Spacer AppBar--Spacer__Logo"></div>

    <Menu.Item header className="AppBar--ItemGroup AppBar--ItemGroup__Logo">
      <Icon name="sidebar" />
      <span className="AppBar--Logo">
          Wishlist App
        </span>
    </Menu.Item>
    <Container>
      <Menu.Item name="MANAGE" active={activeItem === 'manage'} />
      <Menu.Item name="PREVIEW" active={activeItem === 'preview'} />

      <Menu.Menu className="AppBar--ItemGroup__Accounts" position="right">
        <Menu.Item name="signup">
          <Icon name="signup" /> Sign Up
        </Menu.Item>
        <Menu.Item name="login">
          <Icon name="user" />
          Log In
        </Menu.Item>
      </Menu.Menu>

    </Container>

    <div className="AppBar--Spacer AppBar--Spacer__Accounts"></div>
  </Menu>
);

export default AppBar;
