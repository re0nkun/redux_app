import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App';
import todo from './reducers'
import  { addTodo, toggleTodo, setVisibilityFilter } from './actions'

let store = createStore(todo)

store.dispatch(addTodo('Hello React!'))
store.dispatch(addTodo('Hello Redux!!'))
store.dispatch(toggleTodo(0))
// console.log(store.getState())
// store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))
// store.dispatch(setVisibilityFilter('SHOW_ACTIVE'))
// console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);