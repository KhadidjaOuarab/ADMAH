import { combineReducers } from "redux";
import reducerAuth from "./reducerAuth";
import reducerSetProduct from "./reducerSetProduct";

const rootReducer = combineReducers({
    reducerAuth: reducerAuth,
    reducerSetProduct: reducerSetProduct
})

export default  rootReducer