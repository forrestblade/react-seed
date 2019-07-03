import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class App extends Component {
  state = {}

  render () {
    return (
      <div>
        <button onClick={() => this.props.decrement()}>-</button>
        {this.props.value}
        <button onClick={() => this.props.increment()}>+</button>
      </div>
    )
  }
}

App.defaultProps = {
  value: 0
}

App.propTypes = {
  value: PropTypes.number
}
