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
  it('should handle TOGGLE_PURCHASED', () => {
    const itemId = 0;
    store.dispatch(actions.togglePurchased(itemId, true));

    let state = store.getState();
    expect(
      state.getIn(['wishlist', 'items', itemId]).get('purchased')
    ).toBeTruthy();

    store.dispatch(actions.togglePurchased(itemId, false));
    state = store.getState();
    expect(
      state.getIn(['wishlist', 'items', itemId]).get('purchased')
    ).toBeFalsy();
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
  it('should handle ADD_ITEM_MODAL actions', () => {
    const statePathArr = ['wishlist', 'showAddItemModal'];
    store.dispatch(actions.toggleAddItemModal(true));

    let state = store.getState();
    expect(state.getIn(statePathArr)).toBeTruthy();

    store.dispatch(actions.toggleAddItemModal(false));
    state = store.getState();
    expect(state.getIn(statePathArr)).toBeFalsy();

  });
});
