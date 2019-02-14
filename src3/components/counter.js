import React, { Component } from 'react';

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'

class Counter extends Component {
  render() {
    let {
      counter,
      dispatch_increment,
      dispatch_decrement
    } = this.props

    return (
      <div>
        <div>count:{counter.count}</div>
        <button onClick={() => this.props.dispatch(increment())}>+</button>
        <button onClick={() => this.props.dispatch({type: 'DECREMENT'})}>-</button>
        {/* <button onClick={dispatch_increment}>+</button>
        <button onClick={dispatch_decrement}>-</button> */}
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.object.isRequired,
  dispatch_increment: PropTypes.func.isRequired,
  dispatch_decrement: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { counter: state.counterReducer }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch_increment: () => dispatch(increment()),
//     dispatch_decrement: () => dispatch(decrement())
//   }
// }
export default connect(
  mapStateToProps, 
  // mapDispatchToProps
)(Counter)

// export default Counter;