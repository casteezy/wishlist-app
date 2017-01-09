import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

const btnProps = {
  basic: true,
};

// TODO: user icons vs guest icons
const LinkBar = ({ itemId, purchased, favorited, handleMarkPurchased, handleToggleFavorited }) => (
  <div className="LinkBar">
    <div className="clearfix-group right floated">
      {!favorited && <Button
        {...btnProps}
        onClick={handleToggleFavorited}
        icon="empty star"
        color="yellow"
      />}
      {favorited && <Button
        {...btnProps}
        onClick={handleToggleFavorited}
        icon="star"
        color="yellow"
      />}
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
  itemId: PropTypes.string.isRequired,
  purchased: PropTypes.bool,
  favorited: PropTypes.bool,
  handleMarkPurchased: PropTypes.func.isRequired,
  handleToggleFavorited: PropTypes.func.isRequired,
};

LinkBar.defaultProps = {
  purchased: false,
};

export default LinkBar;
