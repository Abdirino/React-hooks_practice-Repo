import { useState } from 'react'

const Counter2 = () => {

    const [count, SetCount] = useState(0);
    const initialCount = 0;

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> SetCount( count + 1)}>Increment</button>
        <button onClick={()=> SetCount( count - 1)}>Decrement</button>
        <button onClick={()=> SetCount( initialCount)}>reset</button>
    </div>
  )
}

export default Counter2