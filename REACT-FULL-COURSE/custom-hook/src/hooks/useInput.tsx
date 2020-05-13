import React,{useState} from 'react'

function useInput(initialValue:any) {
    const [value,setValue]=useState()
    const reset:any=()=>{
        setValue(initialValue);
    }
    const bind={
        value,//value:value ES6 short notation
        onChange:(e:any)=>{
            setValue(e.target.value)
        }
    }
    return [value,reset,bind]   
}

export default useInput
