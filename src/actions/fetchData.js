import axios from 'axios'
import {
    UPDATE_DATA,
    FETCH_PRODUCT,
} from "./types";
export const fetchData = (productsFilter, setMainImage) => {
    return (dispatch) => {
        axios({
            method: "post",
            url: "http://localhost:9191/api/collections/get/products?token=9c31ae75f9b25dcb7950a9606518f3",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                populate: 3,

            }
        }).then(({
            data,
            data: {
                entries,
                fields
            }
        }) => {
            dispatch({
                type: UPDATE_DATA,
                payload: entries
            })
            if (productsFilter) {

                const product = entries.filter(({
                    _id
                }) => _id === productsFilter)[0]
                dispatch({
                    type: FETCH_PRODUCT,
                    payload: product
                })
                setMainImage(`http://localhost:9191${product.images[0].path}`);
            }
        });

    };
};


export const reviewProduct = (data) => {
    return (dispatch) => {
        axios.post(`http://localhost:9191/api/collections/save/products/?token=9c31ae75f9b25dcb7950a9606518f3`, {
            data
        }).then((res) => {
            axios({
                method: "post",
                url: "http://localhost:9191/api/collections/get/products?token=9c31ae75f9b25dcb7950a9606518f3",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    populate: 3,
                    filter: {
                        _id: data._id
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

            });
        })
    }



}