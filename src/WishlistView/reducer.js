import {
    MARK_PURCHASED
} from './actions';

// TODO: fetch initial state
let index = 0;
const initialOwnerName = 'Jane';
const initialItems = [{
    id: index++,
    title: 'Lorem Ipsum Dolores',
    detail: '$21.99 at Amazon, Qty: 1',
    description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
    purchased: false,
}, {
    id: index++,
    title: 'Forcem Ipsum Rebel Base',
    detail: '$3.95 at Target, Qty: 8',
    description: `Stretch out with your feelings. You see, you can do it. I call it luck. In my experience, there's no such thing as luck. Look, going good against remotes is one thing. Going good against the living? That's something else. Looks like we're coming up on Alderaan. No, my father didn't fight in the wars. He was a navigator on a spice freighter. That's what your uncle told you. He didn't hold with your father's ideals. Thought he should have stayed here and not gotten involved. You fought in the Clone Wars? Yes, I was once a Jedi Knight the same as your father.`,
    purchased: false,
}, {
    id: index++,
    title: 'Coffee Ipsum Con Panna Crema Aroma',
    detail: '$4.95 at Starbucks, Qty: 2',
    description: `In cortado con panna mug robust cinnamon single shot sweet organic plunger pot lungo.`,
    purchased: true,
}];

export const initialState = {
    ownerName: initialOwnerName,
    items: initialItems,
};

const items = (state = [], action) => {
    switch (action.type) {
        case MARK_PURCHASED:
            return state.map((item) => {
                if (item.id === action.id) {
                    return Object.assign({}, item, {purchased: true});
                }
                return item;
            });
        default:
            return state;

    }
};

const wishlistView = (state = initialState, action) => {
    switch (action.type) {
        case MARK_PURCHASED:
            return Object.assign({}, state, {
                items: items(state.items, action)
            });
        default:
            return state;

    }
};

export default wishlistView;