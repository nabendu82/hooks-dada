import React, { useContext } from 'react'
import { CounterContext } from '../App';

const GrandParent1 = () => {
    const countContext = useContext(CounterContext);
    return (
        <>
            <h1>GrandParent1 - Count - {countContext.count}</h1>
            <button onClick={() => countContext.dispatch('increment')}>Increment</button>
            <button onClick={() => countContext.dispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.dispatch('reset')}>Reset</button>
        </>
    )
}

export default GrandParent1