import axios from 'axios'
import {
    ADD_TO_CART,
    REMOVE_PRODUCT,
    ORDER_DONE,
    ORDER_WAITING,
    VIEWED_PRODUCT
} from "./types";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
};
export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        payload: id
    }
}
export const sendOrderRequest = (data) => {

    return (dispatch) => {
        dispatch({
            type: ORDER_WAITING
        })
        axios.post("http://localhost:9191/api/collections/save/customers/reviews?token=9c31ae75f9b25dcb7950a9606518f3", {
                data
            })
            .then((res) => {
                setTimeout(function () {
                    return dispatch({
                        type: ORDER_DONE
                    })
                }, 4000);

            });
    };
}
export const viewedProduct = (product) => {
    return (dispatch) => {
        dispatch({
            type: VIEWED_PRODUCT,
            payload: product
        })
    }
}