import { useCounter } from '../hooks/useCounter';


export const CounterWithHook = () => {
const {count, incrementBy} = useCounter({initialValue: 6})

  return (
    <>
      <h3>Contador: <small>{count}</small></h3>
      <div>
        <button onClick={() => incrementBy(1)}>+1</button>
        &nbsp;
        <button onClick={() => incrementBy(-1)}>-1</button>
      </div>
    </>
  )
}
