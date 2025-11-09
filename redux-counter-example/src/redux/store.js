import { createStore, combineReducers } from "redux";
import counterReducer from "./counterReducers";

const rootReducer = combineReducers({
    counter: counterReducer,
});


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSIONS__&& window.__REDUX_DEVTOOLS_EXTENSIONS__()
);


export default store;