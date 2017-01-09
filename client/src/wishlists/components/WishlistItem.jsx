import React, { PropTypes } from 'react';
import { Card, Image } from 'semantic-ui-react';
import LinkBar from './LinkBar';
import '../styles/WishlistItem.scss';

const WishlistItem = ({
  id, imgSrc, title, detail, description, purchased, handleMarkPurchased,
}) => (
  <Card className="WishlistItem">
    <Image src={imgSrc} />
    <Card.Content>
      <Card.Header className="WishlistItem--Title">{title}</Card.Header>
      <Card.Meta>
        <span className="date">{detail}</span>
      </Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <LinkBar itemId={id} purchased={purchased} handleMarkPurchased={handleMarkPurchased} />
    </Card.Content>
  </Card>
);

export const WishlistItemType = WishlistItem.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string,
  description: PropTypes.string,
  purchased: PropTypes.bool,
  handleMarkPurchased: PropTypes.func,
};

export default WishlistItem;
