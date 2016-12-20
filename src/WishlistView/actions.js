/////////////////////// ACTION TYPES

export const MARK_PURCHASED = 'MARK_PURCHASED';


/////////////////////// CONSTANTS


/////////////////////// ACTION CREATORS

export const markPurchased = (id) => {
    return {
        type: MARK_PURCHASED,
        id,
    };
};