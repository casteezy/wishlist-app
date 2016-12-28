import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

const btnProps = {
  basic: true,
  size: 'small',
  compact: true,
};
const LinkBar = ({ purchased, handleMarkPurchased }) => (
  <div className="LinkBar">
    {/* <Button.Group fluid>
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
     </Button.Group>*/}
    {!purchased && <Button
      basic
      {...btnProps}
      color="green"
      onClick={handleMarkPurchased}
      icon="checkmark"
      content="Reserve"
    />}
    {purchased && <Button
      color="green"
      {...btnProps}
      icon="check circle"
      content="Reserved"
    />}
    <Button
      {...btnProps}
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
