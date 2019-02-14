import { handleActions } from 'redux-actions'

const initialState = 0

export default handleActions({
  INCREMENT: (state, action) => {
    return state + 1
  },
  DECREMENT: (state, action) => {
    return state - 1 
  }
}, initialState)

// export default (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }