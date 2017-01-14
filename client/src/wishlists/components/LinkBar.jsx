import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

// TODO: user icons vs guest icons
const LinkBar = ({
  purchased,
  favorited,
  handleTogglePurchased,
  handleToggleFavorited,
}) => (
  <div className="LinkBar">
    <div className="clearfix-group right floated">
      {!favorited && <Button
        basic
        onClick={handleToggleFavorited}
        icon="empty star"
        color="yellow"
      />}
      {favorited && <Button
        basic
        onClick={handleToggleFavorited}
        icon="star"
        color="yellow"
      />}
      <Button
        basic
        icon="write"
      />
      <Button
        basic
        icon="delete"
      />
    </div>

    <Button.Group className="clearfix-group" widths="2" attached="bottom">
      {!purchased && <Button
        basic
        color="green"
        icon="checkmark"
        content="Reserve"
        onClick={handleTogglePurchased}
      />}
      {purchased && <Button
        basic
        icon="check circle"
        content="Reserved"
        onClick={handleTogglePurchased}
      />}
      <Button
        basic
        icon="help circle"
        content="Ask"
      />
    </Button.Group>
  </div>
);

LinkBar.propTypes = {
  purchased: PropTypes.bool.isRequired,
  favorited: PropTypes.bool.isRequired,
  handleTogglePurchased: PropTypes.func.isRequired,
  handleToggleFavorited: PropTypes.func.isRequired,
};

export default LinkBar;
