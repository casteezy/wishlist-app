import createStore from './createStore';
import wishlistViewReducer from '../WishlistView/reducer';

export default createStore({
  reducers: {
    wishlistView: wishlistViewReducer,
  },
});
