import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// we import the store to use the subscribe(listener) method
import { store } from "./store";
import { Provider } from 'react-redux'

//1.
const render = function() {
  ReactDOM.render(
  <Provider store={store}> <App /> </Provider>
 , document.getElementById("root"))
} 

//2.
render()

//3. 
store.subscribe(render);