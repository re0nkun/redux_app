import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import Counter from './components/Counter';
import counter from './reducers'
import { increment, decrement } from './actions'


const store = createStore(counter)
const rootEl = document.getElementById('root')

function mapStateToProps (state) {
  return { value: state }
}
function mapDispatchToProps (dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}
let AppContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

const render = () => ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  rootEl
)
render()

// const render = () => ReactDOM.render(
//   <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch(increment())}
//     onDecrement={() => store.dispatch(decrement())}
//   />,
//   rootEl
// )
// render()
// store.subscribe(render)