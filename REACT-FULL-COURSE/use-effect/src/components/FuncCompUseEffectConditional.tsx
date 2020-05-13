import React,{useState,useEffect} from 'react'

function FuncCompUseEffectConditional() {
   const [count,setCount]=useState(0);
   const [name,setName]=useState('');
   useEffect(()=>{
    console.log('Updating document title');   
    document.title=`You have clicked ${count} times`
   },[count]);
   //array agr contains states for whose change effect should run conditoanlly
    return (
        <div>
            <div>
               <input type="text" value={name} 
                onChange={(e)=>{setName(e.target.value);}}/>
                <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
            </div>
        </div>
    )
}

export default FuncCompUseEffectConditional
