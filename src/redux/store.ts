import {combineReducers, createStore} from "redux";
import {counterReduser} from "./counterReducer";

const reducers = combineReducers({
    counter: counterReduser
});

export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers);