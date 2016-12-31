import createStore from './createStore';
import wishlist from './modules/wishlist';

export default createStore({
  reducers: {
    wishlist,
  },
});
