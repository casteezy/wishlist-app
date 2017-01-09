import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

const btnProps = {
  basic: true,
};

// TODO: user icons vs guest icons
const LinkBar = ({
  itemId,
  purchased,
  favorited,
  handleTogglePurchased,
  handleToggleFavorited,
}) => (
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
        icon="checkmark"
        content="Reserve"
        onClick={handleTogglePurchased}
      />}
      {purchased && <Button
        {...btnProps}
        icon="check circle"
        content="Reserved"
        onClick={handleTogglePurchased}
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
  handleTogglePurchased: PropTypes.func.isRequired,
  handleToggleFavorited: PropTypes.func.isRequired,
};

LinkBar.defaultProps = {
  purchased: false,
};

export default LinkBar;
