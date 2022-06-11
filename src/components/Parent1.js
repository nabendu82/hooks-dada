import React, { useContext } from 'react'
import { CounterContext } from '../App';

const Parent1 = () => {
  const countContext = useContext(CounterContext);
  return (
      <>
          <h1>Parent1 - Count - {countContext.count}</h1>
          <button onClick={() => countContext.dispatch('increment')}>Increment</button>
          <button onClick={() => countContext.dispatch('decrement')}>Decrement</button>
          <button onClick={() => countContext.dispatch('reset')}>Reset</button>
      </>
  )
}

export default Parent1