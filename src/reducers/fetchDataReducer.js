import {
    UPDATE_DATA,
    FETCH_PRODUCT,
    REVIEW_PRODUCT
} from "../actions/types";
const INITIAL_STATE = {
    products: [],
    product: {}
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_DATA:
            return {
                ...state, products: [...action.payload]
            };
        case FETCH_PRODUCT:
            return {
                ...state, product: action.payload
            };
        case REVIEW_PRODUCT:
            console.log('connected')
            return state;
        default:
            return state;
    }
}