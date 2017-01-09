/* eslint-disable no-undef, comma-dangle */
import { Map } from 'immutable';
import store from '../../main/store';
import * as actions from '../actions';

const testItem = ({
  id, title = 'Title', detail = 'Detail', description = 'Description', purchased = false,
}) => {
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
    const itemId = 0;
    store.dispatch(actions.markPurchased(itemId));
    const state = store.getState();
    expect(
      state.getIn(['wishlist', 'items', itemId]).get('purchased')
    ).toBeTruthy();
  });
  it('should handle TOGGLE_FAVORITE', () => {
    const itemId = 0;
    store.dispatch(actions.toggleFavorite(itemId, true));
    let state = store.getState();
    expect(
      state.getIn(['wishlist', 'items', itemId]).get('favorited')
    ).toBeTruthy();

    store.dispatch(actions.toggleFavorite(itemId, false));
    state = store.getState();
    expect(
      state.getIn(['wishlist', 'items', itemId]).get('favorited')
    ).toBeFalsy();
  });
});
