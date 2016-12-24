import React, { PropTypes } from 'react';
import { Icon } from 'react-fa';

const LinkBar = ({ purchased, handleMarkPurchased }) => (
  <ul className="LinkBar list-inline">
    {!purchased && <li className="LinkBar--Item">
      <a
        href="#TODO" onClick={
        (e) => {
          e.preventDefault();
          handleMarkPurchased();
        }}
      >
        <Icon name="check-circle" /> Mark as Purchased
      </a>
    </li>}
    <li className="LinkBar--Item">
      <a href="#TODO">
        <Icon name="question-circle" /> Ask About This Item
      </a>
    </li>
  </ul>
);

LinkBar.propTypes = {
  purchased: PropTypes.bool,
  handleMarkPurchased: PropTypes.func.isRequired,
};

LinkBar.defaultProps = {
  purchased: false,
  handleMarkPurchased: () => {
  },
};

export default LinkBar;
