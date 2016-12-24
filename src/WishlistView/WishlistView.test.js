/* eslint-disable no-undef */
import { Map, List } from 'immutable';
import store from '../App/store';
import * as actions from './actions';
import reducer, { initialState } from './reducer';

describe('WishlistView actions', () => {
  it('markPurchased should create MARK_PURCHASED action', () => {
    expect(actions.markPurchased(100)).toEqual({
      id: 100,
      type: actions.MARK_PURCHASED,
    });
  });
});

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
  it('should handle initial state', () => {
    // FIXME: initial state
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle MARK_PURCHASED', () => {
    // FIXME only works in scenario where index === id
    store.dispatch(actions.markPurchased(0));
    const state = store.getState();
    expect(state.getIn(['wishlistView', 'items', 0], 'purchased')).toBeTruthy();
  });
});
