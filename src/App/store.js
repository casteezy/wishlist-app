import {combineReducers} from 'redux';
import {createStore} from 'redux';
import wishlistView from '../WishlistView/reducer';

const store = createStore(combineReducers({
    wishlistView
}));

export default store;