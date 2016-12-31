import React, { PropTypes } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { IconButton, Button } from 'react-toolbox/lib/button';
import style from './WishlistItem.scss';
// import LinkBarContainer from './LinkBarContainer';
// import '../styles/_WishlistItem.scss';

const WishlistItem = ({ id, imgSrc, title, detail, description, purchased }) => (
  <Card className={style.card}>
    <CardMedia aspectRatio="wide" image={imgSrc} />
    <CardTitle
      title={title}
      subtitle={detail}
    />
    <CardText>{description}</CardText>
    <CardActions>
      <Button icon={purchased ? 'check_circle' : 'check'} label={purchased ? 'Purchased' : 'Mark Purchased'} />
      <Button icon="help" label="Ask" />
    </CardActions>
    <CardActions>
      <IconButton icon="star" />
      <IconButton icon="mode_edit" />
      <IconButton icon="delete" />
    </CardActions>
  </Card>
);
export const WishlistItemType = WishlistItem.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string,
  description: PropTypes.string,
  purchased: PropTypes.bool,
};

export default WishlistItem;
