import { combineReducers, createStore } from 'redux';
import wishlistView from '../WishlistView/reducer';

const store = createStore(combineReducers({
  wishlistView,
}));

export default store;
