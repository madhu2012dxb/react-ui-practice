import React,{useState,useEffect} from 'react'

function DocTitleCounterUpdate() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
    document.title=`Count-${count}`;
    },[count]);

    return (
        <div>
        <div>
        Count: {count}
        </div>
        <div>
        <button onClick={()=>setCount(count+1)}>Increment Count</button>    
        </div>
        </div>
    )
}

export default DocTitleCounterUpdate
