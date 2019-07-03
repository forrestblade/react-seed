import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class App extends Component {
  state = {}

  render () {
    return (
      <div className='App'>
        <p>React Seed</p>
        <div className='counter'>
          <button onClick={() => this.props.decrement()}>-</button>
          {this.props.value}
          <button onClick={() => this.props.increment()}>+</button>
        </div>
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
