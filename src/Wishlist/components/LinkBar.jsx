import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

const btnProps = {
  size: 'small',
  compact: true,
};
const LinkBar = ({ purchased, handleMarkPurchased }) => (
  <div className="LinkBar">
    <Button.Group fluid>
      <Button
        {...btnProps}
        icon="star"
        color="yellow"
      />
      <Button
        {...btnProps}
        icon="write"
      />
      <Button
        {...btnProps}
        icon="delete"
      />
    </Button.Group>
    {!purchased && <Button
      {...btnProps}
      basic
      color="green"
      onClick={handleMarkPurchased}
      icon="checkmark"
      content="Reserve"
    />}
    {purchased && <Button
      {...btnProps}
      color="green"
      icon="check circle"
      content="Reserved"
    />}
    <Button
      {...btnProps}
      basic
      icon="help circle"
      content="Ask About"
    />
  </div>
);

LinkBar.propTypes = {
  purchased: PropTypes.bool,
  handleMarkPurchased: PropTypes.func.isRequired,
};

LinkBar.defaultProps = {
  purchased: false,
};

export default LinkBar;
