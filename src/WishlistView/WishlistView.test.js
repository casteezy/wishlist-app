/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import { Map, List } from 'immutable';
import * as actions from './actions';
import reducer, { initialState } from './reducer';


const mockStore = configureStore();

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
    const items = List([testItem({ id: 100 }), testItem({ id: 200 })]);
    const state = Map({ items });

    const store = mockStore(state);
    store.dispatch(actions.markPurchased(100));
    expect(store.getState()).toEqual(state.setIn(['items', 0, 'purchased'], true));
  });
});
