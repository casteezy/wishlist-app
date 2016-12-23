import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import Flexbox from 'flexbox-react';
import WishlistViewItem, { WishlistViewItemType } from './components/WishlistViewItem';
import './WishlistView.scss';

const mapStateToProps = ({ wishlistView }) => ({
  ownerName: wishlistView.ownerName,
  items: wishlistView.items,
});

const WishlistViewComponent = ({ ownerName, items }) => (
  <div className="WishlistView container">
    <Flexbox flexDirection="column">
      <PageHeader className="WishlistView--Title">
        {ownerName}&rsquo;s Wishlist
      </PageHeader>
      {items.map(itemProps =>
        <WishlistViewItem
          key={itemProps.id}
          imgSrc="http://placehold.it/200x200"
          {...itemProps}
        />,
      )}
    </Flexbox>
  </div>
);

WishlistViewComponent.propTypes = {
  ownerName: PropTypes.string.isRequired,
  items: ImmutablePropTypes.listOf(WishlistViewItemType),
};

WishlistViewComponent.defaultProps = {
  items: [],
};

export default connect(mapStateToProps)(WishlistViewComponent);
