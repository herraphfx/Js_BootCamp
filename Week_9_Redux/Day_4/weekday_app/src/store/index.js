// we import the createStore factory function from Redux. 
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers";
import { first } from './middlewares'
import thunk from 'redux-thunk';


const middlewareEnhancer = applyMiddleware(first)


// set the current day to Monday
const initialState = { weekday: "Monday" }



// we invoke and import the function to create the store.
export const store = createStore(reducer, initialState, middlewareEnhancer);

