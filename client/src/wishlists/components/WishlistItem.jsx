import React, { PropTypes } from 'react';
import { Card, Image } from 'semantic-ui-react';
import LinkBar from './LinkBar';
import '../styles/WishlistItem.scss';

const WishlistItem = ({
  imgSrc,
  title,
  detail,
  description,
  purchased,
  favorited,
  handleTogglePurchased,
  handleToggleFavorited,
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
      <LinkBar
        purchased={purchased}
        favorited={favorited}
        handleTogglePurchased={handleTogglePurchased}
        handleToggleFavorited={handleToggleFavorited}
      />
    </Card.Content>
  </Card>
);

export const WishlistItemType = WishlistItem.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string,
  description: PropTypes.string,
  purchased: PropTypes.bool,
  favorited: PropTypes.bool,
  handleTogglePurchased: PropTypes.func.isRequired,
  handleToggleFavorited: PropTypes.func.isRequired,
};

export default WishlistItem;
