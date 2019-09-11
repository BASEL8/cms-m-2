import axios from 'axios'
import {
    UPDATE_DATA,
    FETCH_PRODUCT,
    REVIEW_PRODUCT
} from "./types";
export const fetchData = (productsFilter) => {
    return (dispatch) => {
        axios({
            method: "post",
            url: "http://localhost:9191/api/collections/get/products?token=9c31ae75f9b25dcb7950a9606518f3",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                populate: 1
            }
        }).then(({
            data,
            data: {
                entries,
                fields
            }
        }) => {
            console.log(data)
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
            url: "http://localhost:9191/api/collections/get/products?token=9c31ae75f9b25dcb7950a9606518f3",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                populate: 3,
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
            console.log(entries[0])
            setMainImage(`http://localhost:9191${entries[0].images[0].path}`);

        });
        axios({
            method: "post",
            url: "http://localhost:9191/api/collections/get/products?token=9c31ae75f9b25dcb7950a9606518f3",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                populate: 1
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
        });



    };
}

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