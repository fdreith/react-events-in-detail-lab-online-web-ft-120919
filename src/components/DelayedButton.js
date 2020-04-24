
import React from 'react';

class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist()
    let callback = this.props.onDelayedClick
    setTimeout(callback, this.props.delay, event)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed Button</button>
    )
  }

}

export default DelayedButton