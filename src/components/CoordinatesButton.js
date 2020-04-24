
import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (e) => {
    let array = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(array)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}>
        Coordinates Button
      </button>
    )
  }


}

export default CoordinatesButton