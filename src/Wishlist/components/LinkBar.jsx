import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

const btnProps = {
  basic: true,
  compact: true,
  size: 'small',
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

    <div className="clearfix-group right floated">
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
        content="Ask About"
      />
    </div>
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
