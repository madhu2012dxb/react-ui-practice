import React,{useState,useEffect} from 'react'

function FuncCompUseEffect() {
   const [count,setCount]=useState(0);
   useEffect(()=>{
    document.title=`You have clicked ${count} times`
   });

    return (
        <div>
            <div>
                <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
            </div>
        </div>
    )
}

export default FuncCompUseEffect
