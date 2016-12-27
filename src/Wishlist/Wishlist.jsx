import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import Flexbox from 'flexbox-react';
import WishlistItem from './components/WishlistItem';
import './Wishlist.scss';

const mapStateToProps = (state) => {
  const wishlist = state.get('wishlist');
  return {
    ownerName: wishlist.get('ownerName'),
    items: wishlist.get('items'),
  };
};

const Wishlist = ({ ownerName, items }) => (
  <div className="Wishlist container">
    <Flexbox flexDirection="column">
      <PageHeader className="Wishlist--Title">
        {ownerName}&rsquo;s Wishlist
      </PageHeader>
      {items.map(itemProps =>
        <WishlistItem
          key={itemProps.get('id')}
          imgSrc="http://placehold.it/200x200"
          {...itemProps.toJS()}
        />,
      )}
    </Flexbox>
  </div>
);

Wishlist.propTypes = {
  ownerName: PropTypes.string.isRequired,
  items: ImmutablePropTypes.list,
};

Wishlist.defaultProps = {
  items: [],
};

export default connect(mapStateToProps)(Wishlist);
