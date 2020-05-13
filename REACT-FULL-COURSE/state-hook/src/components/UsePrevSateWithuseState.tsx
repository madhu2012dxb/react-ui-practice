import React, { useState } from 'react'

function UsePrevSateWithuseState() {
    const [count,setCount]=useState(0);
    //array destructing useState retuns array of values
    //rerenders on setCount called(as state changed)
    const incrementWithPrevState=()=>{
       for(let i=0;i<5;i++){
        //setCount((prevState:any)=>prevState+1)
        setCount((prevState:any)=> {
            return prevState+1
        })
       }
    }
    return (
        <div>
           <button onClick={incrementWithPrevState}>Click {count} times</button> 
        </div>
    )
}

export default UsePrevSateWithuseState
