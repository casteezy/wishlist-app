import React, { PropTypes } from 'react';
// import { Card, Image } from 'semantic-ui-react';
import LinkBarContainer from './LinkBarContainer';
import '../styles/_WishlistItem.scss';

const WishlistItem = ({ id, imgSrc, title, detail, description, purchased }) => (
  <span className="date">{detail}</span>
);
/*<Card className="WishlistItem">
 <Image src={imgSrc} />
 <Card.Content>
 <Card.Header className="WishlistItem--Title">{title}</Card.Header>
 <Card.Meta>
 <span className="date">{detail}</span>
 </Card.Meta>
 <Card.Description>{description}</Card.Description>
 </Card.Content>
 <Card.Content extra>
 <LinkBarContainer itemId={id} purchased={purchased} />
 </Card.Content>
 </Card>*/
export const WishlistItemType = WishlistItem.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string,
  description: PropTypes.string,
  purchased: PropTypes.bool,
};

export default WishlistItem;
