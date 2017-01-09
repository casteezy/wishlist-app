import { Map } from 'immutable';
import casual from 'casual-browserify';
import * as actions from './constants/actionTypes';

// REDUCERS
const itemsReducer = (stateItems = {}, { type, payload }) => {
  switch (type) {
    case actions.TOGGLE_PURCHASED:
      return stateItems.setIn([payload.id, 'purchased'], payload.purchased);
    case actions.TOGGLE_FAVORITE:
      return stateItems.setIn([payload.id, 'favorited'], payload.favorited);
    default:
      return stateItems;
  }
};

// TODO: fetch initial state
const initialOwnerName = casual.first_name;
const initialItems =
  Map({
    0: Map({
      title: 'Lorem Ipsum Dolores',
      detail: '$21.99 at Amazon, Qty: 1',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
      purchased: false,
      favorited: false,
    }),
    [casual.random]: Map({
      title: 'Forcem Ipsum Rebel Base',
      detail: '$3.95 at Target, Qty: 8',
      description: 'Stretch out with your feelings. You see, you can do it. I call it luck. In my experience, there\'s no such thing as luck. Look, going good against remotes is one thing. Going good against the living? That\'s something else. Looks like we\'re coming up on Alderaan. No, my father didn\'t fight in the wars. He was a navigator on a spice freighter. That\'s what your uncle told you. He didn\'t hold with your father\'s ideals. Thought he should have stayed here and not gotten involved. You fought in the Clone Wars? Yes, I was once a Jedi Knight the same as your father.',
      purchased: false,
      favorited: false,
    }),
    [casual.random]: Map({
      title: 'Coffee Ipsum Con Panna Crema Aroma',
      detail: '$4.95 at Starbucks, Qty: 2',
      description: 'In cortado con panna mug robust cinnamon single shot sweet organic plunger pot lungo.',
      purchased: true,
      favorited: true,
    }),
    [casual.random]: Map({
      title: casual.title,
      detail: casual.short_description,
      description: casual.description,
      purchased: true,
      favorited: true,
    }),
  });

export const initialState = Map({
  ownerName: initialOwnerName,
  items: initialItems,
});

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_PURCHASED:
    case actions.TOGGLE_FAVORITE:
      return state.update('items', itemsMap => itemsReducer(itemsMap, action));
    default:
      return state;
  }
};

export default wishlistReducer;
