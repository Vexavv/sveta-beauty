import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import mainReduser from './mainSlice'

const rootReducer = combineReducers({
main: mainReduser
})
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})

export default store;