import { combineReducers, createStore } from 'redux';
import wishlistViewReducer from '../WishlistView/reducer';

const store = createStore(combineReducers({
  wishlistView: wishlistViewReducer,
}));

export default store;
