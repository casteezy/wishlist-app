/* eslint-disable import/prefer-default-export */
import * as actions from './constants/actionTypes';

// ACTION CREATORS

const togglePurchased = (id, purchased) => ({
  type: actions.TOGGLE_PURCHASED,
  payload: { id, purchased },
});

const toggleFavorite = (id, favorited) => ({
  type: actions.TOGGLE_FAVORITE,
  payload: { id, favorited },
});

const toggleAddItemModal = showModal => ({
  type: actions.TOGGLE_ADD_ITEM_MODAL,
  payload: { showModal },
});


export {
  togglePurchased,
  toggleFavorite,
  toggleAddItemModal,
};
