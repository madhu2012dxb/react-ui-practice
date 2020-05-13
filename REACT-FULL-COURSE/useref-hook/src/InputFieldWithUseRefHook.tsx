import React,{useRef,useEffect} from 'react'

function InputFieldWithUseRefHook() {
   // const inputRef=useRef(null);
   const inputRef:any=useRef(null);
    useEffect(
        ()=>{
            if(inputRef.current){
                inputRef.current.focus();
            }
            
        },[]
    );

    return (
        <div>
           <input type="text" ref={inputRef}/> 
        </div>
    )
}

export default InputFieldWithUseRefHook
