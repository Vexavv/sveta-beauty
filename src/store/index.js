import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import mainReducer from './mainSlice'

const rootReducer = combineReducers({
main: mainReducer
})
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})

export default store;