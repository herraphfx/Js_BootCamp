import React from 'react';
import Day from './Day';
import { connect } from 'react-redux'

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
        <Day/>
        {/* <Day weekday={store.getState().weekday} /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
   return { weekday: state.weekday };
};

App = connect(mapStateToProps)(App)

export default connect(mapStateToProps)(App);