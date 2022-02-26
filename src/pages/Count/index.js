import React, { useReducer } from 'react'
import { defaultState, reducer as countReducer } from './store/reducer'
import { increment, decrement } from './store/actions'

export default function Count() {
  const [count, dispatch] = useReducer(countReducer, defaultState)

  return (
    <div>
      <h1>Count</h1>
      <hr />
      <div>{count.count}</div>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}
