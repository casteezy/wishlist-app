import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import Heading from './Heading';
import WishlistItem from './WishlistItem';
import AddItemModal from './AddItemModal';
import { toggleAddItemModal, togglePurchased, toggleFavorite } from '../actions';
import '../styles/Wishlist.scss';

const Wishlist = ({
  ownerName,
  items,
  handleShowAddItemModal,

  showAddItemModal,
  handleAddItemModalClose,
  handleAddItem,

  handleTogglePurchased,
  handleToggleFavorited
}) => (
  <div className="Wishlist">
    <Heading
      ownerName={ownerName}
      handleShowAddItemModal={handleShowAddItemModal}
    />
    <AddItemModal
      showModal={showAddItemModal}
      handleModalClose={handleAddItemModalClose}
      handleAddItem={handleAddItem}
    />
    <Flexbox
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="flex-start"
    >
      {items.keySeq().map(itemId =>
        <WishlistItem
          key={itemId}
          imgSrc="http://placehold.it/290x200"
          handleTogglePurchased={() => handleTogglePurchased(itemId, !items.getIn([itemId, 'purchased']))}
          handleToggleFavorited={() => handleToggleFavorited(itemId, !items.getIn([itemId, 'favorited']))}
          {...items.get(itemId).toJS()}
        />,
      )}
    </Flexbox>
  </div>
);

const mapStateToProps = state => ({
  ownerName: state.getIn(['wishlist', 'ownerName']),
  items: state.getIn(['wishlist', 'items']),
  showAddItemModal: state.getIn(['wishlist', 'showAddItemModal'])
});

const mapDispatchToProps = dispatch => ({
  handleShowAddItemModal: () => {
    dispatch(toggleAddItemModal(true));
  },
  handleAddItemModalClose: () => {
    dispatch(toggleAddItemModal(false));
  },
  handleAddItem: (newItem) => {

  },
  handleTogglePurchased: (itemId, purchased) => {
    dispatch(togglePurchased(itemId, purchased));
  },
  handleToggleFavorited: (itemId, favorited) => {
    dispatch(toggleFavorite(itemId, favorited));
  },
});

Wishlist.propTypes = {
  ownerName: PropTypes.string.isRequired,
  handleShowAddItemModal: PropTypes.func,
  showAddItemModal: PropTypes.bool.isRequired,
  handleAddItemModalClose: PropTypes.func,
  handleAddItem: PropTypes.func,
  handleTogglePurchased: PropTypes.func.isRequired,
  handleToggleFavorited: PropTypes.func.isRequired,
  items: ImmutablePropTypes.map,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
