import React, { useState,useEffect } from 'react'

function FunCompUseEffectInvalidDep() {
    const [count,setCount]=useState(0);
    
    useEffect(()=>{
    console.log('UseEffect Called');
    const interval=setInterval(tick,1000);
    return ()=>{
        clearInterval(interval);
    }
   // },[count])
    },[])
    const tick=()=>{
       //setCount(count+1);
      // setCount(prevCount=>prevCount+1);
      setCount(prevCount=>{ return prevCount+1});
    }

    return (
        <div>
             {count} 
        </div>
    )
}

export default FunCompUseEffectInvalidDep
