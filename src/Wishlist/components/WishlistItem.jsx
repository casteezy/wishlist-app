import React, { PropTypes } from 'react';
import { Media } from 'react-bootstrap';
import { Icon } from 'react-fa';
import LinkBarContainer from './LinkBarContainer';

const WishlistItem = ({ id, imgSrc, title, detail, description, purchased }) => (
  <div className="WishlistItem">
    <Media>
      <Media.Left>
        <div className="ImageBlock">
          <img className="ImageBlock--Image" src={imgSrc} alt="placeholder" />
          {purchased && <div className="ImageBlock--Overlay">
            <span className="ImageBlock--OverlayText"><Icon name="check-circle" /> Purchased</span>
          </div>}
        </div>
      </Media.Left>
      <Media.Body>
        <Media.Heading className="WishlistItem--Title">
          <a href="#TODO">{title}</a>
        </Media.Heading>
        <Media.Body>
          <p className="WishlistItem--Detail"><strong>{detail}</strong></p>
          <p className="WishlistItem--Description">{description}</p>
          <LinkBarContainer itemId={id} purchased={purchased} />
        </Media.Body>
      </Media.Body>
    </Media>
  </div>
);

export const WishlistItemType = WishlistItem.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string,
  description: PropTypes.string,
  purchased: PropTypes.bool,
};

export default WishlistItem;
