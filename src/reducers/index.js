// this is the rootReducer!
// To make a RootReducer:
// 1. Get combineReducers method from redux
// 2. Call combineReducers method and pass it an object
// 3. Each key/property of the object, will be a single piece of application/redux state
// 4. Each value will be a single reducer (imported)

import {combineReducers} from "redux"; //1
import weatherReducer from "./weatherReducer";
import stockReducer from "./stockReducer";

const rootReducer = combineReducers({//2
    weather : weatherReducer,//3 and 4
    stocks : stockReducer //3 and 4
})

// ex : props.weather = return value of the reducer

export default rootReducer;