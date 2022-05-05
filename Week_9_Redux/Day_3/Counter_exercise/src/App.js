import React from 'react';
import Day from './Day';

//import the store from store/index.js file
import { store } from "./store";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* //we call the <Day> Component */}
        <Day value={store.getState().value} />
      </div>
    )
  }
}

export default App;