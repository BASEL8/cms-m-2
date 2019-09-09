import {
    UPDATE_DATA,
    FETCH_PRODUCT
} from "../actions/types";
const INITIAL_STATE = {
    products: [],
    product: {}
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_DATA:
            console.log(action.payload)
            return {
                ...state, products: [...action.payload]
            }
            case FETCH_PRODUCT:
                return {
                    ...state, product: action.payload
                }
                default:
                    return state;
    }
}