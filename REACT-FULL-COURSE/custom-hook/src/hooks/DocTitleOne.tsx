import React,{useState,useEffect} from 'react'
import useDocTitle from './useDocTitle';

function DocTitleOne() {
    console.log('DocTitleOne called')
    const [count,setCount]=useState(0);
    useDocTitle(count);
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

export default DocTitleOne
