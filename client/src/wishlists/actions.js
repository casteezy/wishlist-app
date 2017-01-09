
/* eslint-disable import/prefer-default-export */
import * as actions from './constants/actionTypes';

// ACTION CREATORS

const markPurchased = id => ({
  type: actions.MARK_PURCHASED,
  payload: { id },
});

const toggleFavorite = (id, favorited) => ({
  type: actions.TOGGLE_FAVORITE,
  payload: { id, favorited },
});

export {
  markPurchased,
  toggleFavorite,
};
