import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {count}
      <hr />
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count - 1)}>Reduction</button>
    </div>
  )
}
