import {
    ADD_TO_CART
} from "../actions/types";
const INITIAL_STATE = {
    items: [{
            amount: 1,
            availability: "13",
            description: "test",
            images: [{
                path: "/storage/uploads/2019/09/06/5d720fad688adScreenshot-2019-09-06-at-09.49.32.png"
            }, {
                path: "/storage/uploads/2019/09/06/5d720fad81c4aScreenshot-2019-09-06-at-09.49.42.png"
            }, {
                path: "/storage/uploads/2019/09/06/5d720fad99ab5Screenshot-2019-09-06-at-09.49.52.png"
            }],
            name: "product_1",
            price: "30000",
            _by: "5d7202ee3135390019000394",
            _created: 1567756212,
            _id: "5d720fb431353900200000934",
            _mby: "5d7202ee3135390019000394",
            _modified: 1567759262
        },

    ],
    error: null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action.payload)
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
                    items[index].totalPrice = items[index].amount * parseInt(items[index].price)
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