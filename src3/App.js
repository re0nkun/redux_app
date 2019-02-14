import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { increment, decrement } from './actions/counter'
import Counter from './components/counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        {/* <Counter {...this.props}/> */}
      </div>
    )
  }
}

export default App
// App.propTypes = {
//   counter: PropTypes.object.isRequired,
//   dispatch_increment: PropTypes.func.isRequired,
//   dispatch_decrement: PropTypes.func.isRequired
// }

// function mapStateToProps(state) {
//   return { counter: state.counterReducer }
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch_increment: () => dispatch(increment()),
//     dispatch_decrement: () => dispatch(decrement())
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)