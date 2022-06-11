import React, { useContext } from 'react'
import { CounterContext } from '../App';

const Child1 = () => {
  const countContext = useContext(CounterContext);
  return (
      <>
          <h2>Child1 - Count - {countContext.count}</h2>
      </>
  )
}

export default Child1