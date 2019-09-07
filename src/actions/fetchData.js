import axios from 'axios'
import {
    UPDATE_DATA,
    FETCH_PRODUCT
} from "./types";
export const fetchData = () => {
    return (dispatch) => {
        axios({
            method: "post",
            url: "http://localhost:9090/api/collections/get/products?token=9c31ae75f9b25dcb7950a9606518f3",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                populate: 1
            }
        }).then(({
            data: {
                entries
            }
        }) => {
            dispatch({
                type: UPDATE_DATA,
                payload: entries
            })
        });

    };
};
export const fetchProduct = (id, setMainImage) => {
    return (dispatch) => {
        axios({
            method: "post",
            url: "http://localhost:9090/api/collections/get/products?token=9c31ae75f9b25dcb7950a9606518f3",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                populate: 1,
                filter: {
                    _id: id
                }
            }
        }).then(({
            data: {
                entries
            }
        }) => {
            dispatch({
                type: FETCH_PRODUCT,
                payload: entries[0]
            })
            setMainImage(`http://localhost:9090${entries[0].images[0].path}`);

        });

    };
}