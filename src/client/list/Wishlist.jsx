import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import Heading from '../components/wishlist/Heading';
import WishlistItem from '../components/wishlist/WishlistItem';
import './styles/_Wishlist.scss';

const Wishlist = ({ ownerName, items }) => (
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

Wishlist.propTypes = {
  ownerName: PropTypes.string.isRequired,
  items: ImmutablePropTypes.map,
};

export default connect(mapStateToProps)(Wishlist);