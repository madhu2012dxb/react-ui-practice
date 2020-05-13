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
function MultiplUseReducers() {
    const [count,dispatch]=useReducer(reducer,initialState);
    const [countTwo,dispatchTwo]=useReducer(reducer,initialState);
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
            Current Counter1 Value:{count}

            <div>
            <button onClick={()=>dispatchTwo('Increment')}>Increment</button>
            </div>
            <div>
            <button onClick={()=>dispatchTwo('Decrement')}>Decrement</button>
            </div>
            <div>
            <button onClick={()=>dispatchTwo('Reset')}>Reset</button>
            </div>
            Current Counter2 Value:{countTwo}

        </div>
    )
}

export default MultiplUseReducers
