import React, { PropTypes } from 'react';
import { Header, Button, Divider } from 'semantic-ui-react';

const btnProps = {
  basic: true,
  size: 'medium',
  className: 'Heading--Action',
};

// TODO: event handlers
const Heading = ({ ownerName, handleClick }) => (
  <div className="Heading">
    <Header className="Heading--Title" as="h1" floated="left">
      {ownerName}&rsquo;s Wishlist
    </Header>
    <Button
      {...btnProps}
      color="blue"
      floated="right"
      icon="add"
      content="Add Item"
      onClick={handleClick}
    />
    <Button
      {...btnProps}
      floated="right"
      icon="unhide"
      content="Show Reserved"
      onClick={handleClick}
    />
    <Button
      {...btnProps}
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
