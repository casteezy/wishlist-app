import React, { PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';

const btnProps = {
  basic: true,
};

// TODO: user icons vs guest icons
const LinkBar = ({ purchased, handleMarkPurchased }) => (
  <div className="LinkBar">
    <div className="clearfix-group right floated">
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
    </div>

    <Button.Group className="clearfix-group" widths="2" attached="bottom">
      {!purchased && <Button
        {...btnProps}
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
        icon="help circle"
        content="Ask"
      />
    </Button.Group>
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
