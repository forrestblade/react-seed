import { connect } from 'react-redux'
import { increment, decrement } from '../actions/creators'
import { App } from './'

function mapStateToProps (state) {
  return {
    value: state.value
  }
}

export default connect(mapStateToProps, { increment, decrement })(App)
