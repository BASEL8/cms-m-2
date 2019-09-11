import {
    ADD_TO_CART,
    REMOVE_PRODUCT,
    ORDER_DONE,
    ORDER_WAITING
} from "../actions/types";
Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
}
Storage.prototype.getObject = function (key) {
    return JSON.parse(this.getItem(key));
};
var data = localStorage.getObject("cartShopping");
const INITIAL_STATE = {
    ...data,
    error: '',
    loading: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const {
                items
            } = state;
            if (items && items.some(product => product._id === action.payload._id)) {
                const index = items.findIndex(x => x._id === action.payload._id)
                if (index !== -1 && (items[index].amount + action.payload.amount) > parseInt(items[index].availability)) {
                    return {
                        ...state,
                        error: `just ${parseInt(items[index].availability) - (items[index].amount)} in store right now`
                    }
                } else {
                    items[index].amount = items[index].amount + action.payload.amount;
                    items[index].totalPrice = items[index].amount * parseInt(items[index].price)
                    localStorage.setObject('cartShopping', {
                        ...state,
                        items,
                        error: null
                    })

                    return {
                        ...state,
                        items,
                        error: null
                    };
                }
            } else {
                localStorage.setObject('cartShopping', {
                    ...state,
                    items: items ? [...state.items, action.payload] : [action.payload],
                    error: null
                })

                return {
                    ...state,
                    items: items ? [...state.items, action.payload] : [action.payload],
                    error: null
                }
            };
        case REMOVE_PRODUCT:
            localStorage.setObject('cartShopping', {
                state,
                items: state.items.filter(({
                    _id
                }) => _id !== action.payload)
            })
            return {
                state, items: state.items.filter(({
                    _id
                }) => _id !== action.payload)
            };
        case ORDER_DONE:
            localStorage.setObject('cartShopping', [])
            return INITIAL_STATE;
        case ORDER_WAITING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}