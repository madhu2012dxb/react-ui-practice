import React from 'react'
import useCounterHook from './useCounterHook';

function CounterTwo() {
    const[count,increment,decrement,reset]= useCounterHook(10,10);
    return (
        <div>
            CounterTwo-{count}
            <button onClick={increment}>IncrementCount</button>
            <button onClick={decrement}>DecrementCount</button>
            <button onClick={reset}>ResetCount</button>
        </div>
    )
}

export default CounterTwo
