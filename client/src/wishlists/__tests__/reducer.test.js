/* eslint-disable no-undef, comma-dangle */
import { Map } from 'immutable';
import store from '../../main/store';
import * as actions from '../actions';

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


describe('Wishlist reducer', () => {
  it('should handle MARK_PURCHASED', () => {
    store.dispatch(actions.markPurchased(0));
    const state = store.getState();
    expect(
      state.getIn(['wishlist', 'items', 0]).get('purchased')
    ).toBeTruthy();
  });
});
