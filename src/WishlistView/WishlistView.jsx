import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import Flexbox from 'flexbox-react';
import WishlistViewItem from './components/WishlistViewItem';
import './WishlistView.scss';

const mapStateToProps = (state) => {
  const wishlistView = state.get('wishlistView');
  return {
    ownerName: wishlistView.get('ownerName'),
    items: wishlistView.get('items'),
  };
};

const WishlistViewComponent = ({ ownerName, items }) => (
  <div className="WishlistView container">
    <Flexbox flexDirection="column">
      <PageHeader className="WishlistView--Title">
        {ownerName}&rsquo;s Wishlist
      </PageHeader>
      {items.map(itemProps =>
        <WishlistViewItem
          key={itemProps.get('id')}
          imgSrc="http://placehold.it/200x200"
          {...itemProps.toJS()}
        />,
      )}
    </Flexbox>
  </div>
);

WishlistViewComponent.propTypes = {
  ownerName: PropTypes.string.isRequired,
  items: ImmutablePropTypes.list,
};

WishlistViewComponent.defaultProps = {
  items: [],
};

export default connect(mapStateToProps)(WishlistViewComponent);
