import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import { IconButton, Button } from 'react-toolbox/lib/button';
// import { Header, Button, Divider } from 'semantic-ui-react';

// TODO: event handlers
const Heading = ({ ownerName, handleClick }) => (
  <div
    style={{
      marginBottom: '1.5em',
      overflow: 'auto',
      borderBottom: '2px solid blue',
    }}
  >
    <div>
      <h1 style={{ float: 'left' }}>{ownerName}&rsquo;s Wishlist</h1>

      <div style={{ float: 'right', height: '1.5em' }}>
        <Flexbox flexDirection="row" justifyContent="flex-end" alignItems="center">
          <Button
            raised
            primary
            icon="add"
            label="Add Item"
            style={{ marginLeft: '1em' }}
          />
          <Button
            raised
            icon="mode_edit"
            label="Edit"
            style={{ marginLeft: '1em' }}
          />
          <Button
            raised
            icon="visibility"
            label="Show Reserved"
            style={{ marginLeft: '1em' }}
          />
        </Flexbox>
      </div>
    </div>
  </div>
);

const btnProps = {
  basic: true,
  size: 'medium',
  className: 'Heading--Action',
};

Heading.propTypes = {
  ownerName: PropTypes.string.isRequired,
  handleClick: PropTypes.function,
};

export default Heading;
