/* eslint-disable no-undef, comma-dangle */
import { Map, List } from 'immutable';
import store from '../App/store';
import * as actions from './actions';

const testItem = ({ id, title = 'Title', detail = 'Detail', description = 'Description', purchased = false }) => {
  if (!id) throw new Error('id required for testItem');
  return Map({
    id,
    title,
    detail,
    description,
    purchased,
  });
};

describe('WishlistView reducer', () => {
  it('should handle MARK_PURCHASED', () => {
    store.dispatch(actions.markPurchased(0));
    const state = store.getState();
    expect(
      state.getIn(['wishlistView', 'items']).find(item => item.get('id') === 0).get('purchased')
    ).toBeTruthy();
  });
});
