import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import Heading from './Heading';
import WishlistItem from './WishlistItem';
import { togglePurchased, toggleFavorite } from '../actions';
import '../styles/Wishlist.scss';

const Wishlist = ({ ownerName, items, handleTogglePurchased, handleToggleFavorited }) => (
  <div className="Wishlist">
    <Heading ownerName={ownerName} />
    <Flexbox
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="flex-start"
    >
      {items.keySeq().map(key =>
        <WishlistItem
          id={key}
          key={key}
          imgSrc="http://placehold.it/200x200"
          handleTogglePurchased={(e) => {
            e.preventDefault();
            handleTogglePurchased(key, !items.getIn([key, 'purchased']));
          }}
          handleToggleFavorited={(e) => {
            e.preventDefault();
            handleToggleFavorited(key, !items.getIn([key, 'favorited']));
          }}
          {...items.get(key).toJS()}
        />,
      )}
    </Flexbox>
  </div>
);

const mapStateToProps = state => ({
  ownerName: state.getIn(['wishlist', 'ownerName']),
  items: state.getIn(['wishlist', 'items']),
});

const mapDispatchToProps = dispatch => ({
  handleTogglePurchased: (itemId, purchased) => {
    dispatch(togglePurchased(itemId, purchased));
  },
  handleToggleFavorited: (itemId, favorited) => {
    dispatch(toggleFavorite(itemId, favorited));
  },
});

Wishlist.propTypes = {
  ownerName: PropTypes.string.isRequired,
  handleTogglePurchased: PropTypes.func.isRequired,
  handleToggleFavorited: PropTypes.func.isRequired,
  items: ImmutablePropTypes.map,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
