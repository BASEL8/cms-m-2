import {
    combineReducers
} from "redux";
import fetchDataReducer from "./fetchDataReducer";
import cartReducer from './cartReducer'
export default combineReducers({
    fetchDataReducer,
    cartReducer
});