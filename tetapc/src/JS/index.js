import { productReducer } from "./reducer/productReducer";
import userReducer from "./reducer/reducer";
import { combineReducers } from 'redux';





 const rootReducer=combineReducers({user:userReducer,product:productReducer})
 export default rootReducer