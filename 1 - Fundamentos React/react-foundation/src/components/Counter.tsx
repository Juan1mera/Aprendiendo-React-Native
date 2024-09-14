import { useState } from 'react';

export const Counter = () => {

  const [count, setCount] = useState(10)

  const incrementBy = (value: number) => {
    setCount(count + value)
  }

  return (
    <>
      <h3>COntador: <small>{count}</small></h3>
      <div>
        <button onClick={() => incrementBy(1)}>+1</button>
        &nbsp;
        <button onClick={() => incrementBy(-1)}>-1</button>
      </div>
    </>
  )
}
