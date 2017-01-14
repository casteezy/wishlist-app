import React, { PropTypes } from 'react';
import { Header, Button, Divider } from 'semantic-ui-react';

const btnProps = {
  basic: true,
  size: 'medium',
  className: 'Heading--Action',
};

const Heading = ({ ownerName, handleShowAddItemModal }) => (
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
      onClick={handleShowAddItemModal}
    />
    <Button
      {...btnProps}
      floated="right"
      icon="unhide"
      content="Show Reserved"
    />
    <Button
      {...btnProps}
      floated="left"
      icon="write"
      content="Edit"
    />
    <Divider clearing />
  </div>
);

Heading.propTypes = {
  ownerName: PropTypes.string.isRequired,
  handleShowAddItemModal: PropTypes.func.isRequired,
};

export default Heading;
