import { useState } from "react"

const Counter = () => {

    const  [count, SetCount] = useState(0);

  return (
    <div>
        <h1>Counter is : {count}</h1>
        <button onClick={() => SetCount(count + 1)}>Add Counter</button>
    </div>
  )
}

export default Counter