import { combineReducers } from "redux";
import reducerAuth from "./reducerAuth";
import reducerSetProduct from "./reducerSetProduct";
import createAdmReducer from "./createAdmReducer"
const rootReducer = combineReducers({
   // reducerAuth: reducerAuth,
     reducerSetProduct: reducerSetProduct,
    createAdmReducer : createAdmReducer
})

export default  rootReducer