import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {mainReducer} from "./reducers/main/main-reducer";


const rootReducer = combineReducers({
    main: mainReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))