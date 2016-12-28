import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

const LinkBar = ({ purchased, handleMarkPurchased }) => (
  <div className="LinkBar ui two buttons">
    {!purchased && <Button
      basic
      color="green"
      onClick={handleMarkPurchased}
      icon="checkmark"
      content="Mark as Purchased"
    />}
    {purchased && <Button
      color="green"
      icon="check circle"
      content="Purchased"
    />}
    <Button
      basic
      color="blue"
      icon="help circle"
      content="Ask About Item"
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
