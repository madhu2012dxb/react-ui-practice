import React from 'react'
import useCounterHook from './useCounterHook';

function CounterOne() {
    const[count,increment,decrement,reset]= useCounterHook(0,1);
    return (
        <div>
            CounterOne-{count}
            <button onClick={increment}>IncrementCount</button>
            <button onClick={decrement}>DecrementCount</button>
            <button onClick={reset}>ResetCount</button>
        </div>
    )
}

export default CounterOne
