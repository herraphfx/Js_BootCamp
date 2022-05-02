import React from 'react';

class Event extends React.Component {
  

  wasClick = () => {
    alert('I was clicked')
  }

  render() {
    return (
      <div>
      
        <button
          type="button"
          onClick={this.wasClick}
        > Click Me!</button>

      </div>
    );
  }
}

export default Event;