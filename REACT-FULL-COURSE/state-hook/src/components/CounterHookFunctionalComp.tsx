import React,{useState} from 'react'

function CounterHookFunctionalComp() {
    const [count,setCount]=useState(0);
    //array destructing useState retuns array of values
    //rerenders on setCount called(as state changed)
    return (
        <div>
           <button onClick={()=>setCount(count+1)}>Click {count} times</button> 
        </div>
    )
}

export default CounterHookFunctionalComp
