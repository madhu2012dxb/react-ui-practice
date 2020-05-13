import React,{useReducer} from 'react'

const initialState=0;
const reducer=(state:any,action:any)=>{
   switch(action){
       case 'Increment':
           return state+1;
       case 'Decrement':
           return state-1;
       case 'Reset':
           return initialState;
       default:
           return state;   
   }
}
function CounterUsingReducer() {
    const [newState,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
            <div>
            <button onClick={()=>dispatch('Increment')}>Increment</button>
            </div>
            <div>
            <button onClick={()=>dispatch('Decrement')}>Decrement</button>
            </div>
            <div>
            <button onClick={()=>dispatch('Reset')}>Reset</button>
            </div>
            Current Counter Value:{newState}
        </div>
    )
}

export default CounterUsingReducer
