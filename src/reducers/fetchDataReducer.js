import {
    UPDATE_DATA,
    FETCH_PRODUCT,
    REVIEW_PRODUCT,
    FETCH_CATEGORY
} from "../actions/types";
const INITIAL_STATE = {
    products: [],
    product: {},
    productsCategory: []
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
        case FETCH_CATEGORY:
            return {
                ...state, productsCategory: action.payload
            };
        default:
            return state;
    }
}