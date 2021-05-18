import { configureStore , combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterSlice from "../slice/counter";

const reducer = combineReducers({
    counter : counterSlice
})

const store = configureStore({
    reducer:reducer,
    middleware: [ ...getDefaultMiddleware({thunk: false})]
})

export default store