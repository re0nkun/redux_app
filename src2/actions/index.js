import { createAction } from 'redux-actions'

// export const INCREMENT = ('INCREMENT')
// export const DECREMENT = ('DECREMENT')

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')

// const INCREMENT = { type: 'INCREMENT' }
// const DECREMENT = { type: 'DECREMENT' }

// export function increment() {
//   return INCREMENT
// }

// export function decrement() {
//   return DECREMENT
// }