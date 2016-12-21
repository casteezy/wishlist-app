import { describe, it, expect } from 'mocha';
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
  return {
    id,
    title,
    detail,
    description,
    purchased,
  };
};

describe('WishlistView reducer', () => {
  it('should handle initial state', () => {
    // FIXME: initial state
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle MARK_PURCHASED', () => {
    const item1 = testItem({ id: 100 });
    const item2 = testItem({ id: 200 });
    const changedItem1 = testItem({ id: 100, purchased: true });
    const state = { items: [item1, item2] };
    const state2 = { items: [changedItem1, item2] };

    expect(reducer(state, actions.markPurchased(100))).toEqual(state2);
  });
});
