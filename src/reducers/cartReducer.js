import {
    ADD_TO_CART
} from "../actions/types";
const INITIAL_STATE = {
    items: [],
    error: null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const {
                items
            } = state;
            if (items.some(product => product._id === action.payload._id)) {
                const index = items.findIndex(x => x._id === action.payload._id)
                if (index !== -1 && (items[index].amount + action.payload.amount) > parseInt(items[index].availability)) {
                    return {
                        ...state,
                        error: `just ${parseInt(items[index].availability) - (items[index].amount)} in store right now`
                    }
                } else {
                    items[index].amount = items[index].amount + action.payload.amount;
                    return {
                        ...state,
                        items,
                        error: null
                    };
                }
            } else {
                return {
                    ...state,
                    items: [...items, action.payload],
                    error: null
                }
            }

            default:
                return state;
    }
}