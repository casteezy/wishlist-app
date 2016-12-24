import createStore from './createStore';
import wishlist from '../reduxModules/wishlist';

export default createStore({
  reducers: {
    wishlist,
  },
});
