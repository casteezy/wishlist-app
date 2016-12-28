import React, { PropTypes } from 'react';
import { Header, Button, Divider } from 'semantic-ui-react';

// TODO: event handlers
const Heading = ({ ownerName, handleClick }) => (
  <div className="Wishlist--Heading">
    <Header as="h1" floated="left">
      {ownerName}&rsquo;s Wishlist
    </Header>
    <Button
      basic
      color="blue"
      size="medium"
      floated="right"
      icon="add"
      content="Add Item"
      onClick={handleClick}
    />
    <Button
      basic
      size="medium"
      floated="right"
      icon="unhide"
      content="Show Reserved"
      onClick={handleClick}
    />
    <Button
      basic
      size="medium"
      floated="left"
      icon="write"
      content="Edit"
      onClick={handleClick}
    />
    <Divider clearing />
  </div>
);

Heading.propTypes = {
  ownerName: PropTypes.string.isRequired,
  handleClick: PropTypes.function,
};

export default Heading;
