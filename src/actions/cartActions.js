import axios from 'axios'
import {
    ADD_TO_CART,
    REMOVE_PRODUCT,
    ORDER_CREATE
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
        axios.post("http://localhost:9090/api/collections/save/customers?token=9c31ae75f9b25dcb7950a9606518f3", {
                data
            })
            .then((res) => {
                console.log(res)
                return dispatch({
                    type: ORDER_CREATE
                })
            });
    };





    ;
}