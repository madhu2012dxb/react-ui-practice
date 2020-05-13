import React,{useReducer} from 'react'

const initialState={firstCounter:0,secondCounter:10};

const reducer=(state:any,action:any)=>{
   switch(action.type){
       case 'Increment':
           return {...state,firstCounter:state.firstCounter+action.value};
       case 'Decrement':
        return {...state,firstCounter:state.firstCounter-action.value};
       case 'Increment2':
        return {...state,secondCounter:state.secondCounter+action.value};
       case 'Decrement2':
        return {...state,secondCounter:state.secondCounter-action.value};
       case 'Reset':
           //return initialState;
           return {...initialState}
       default:
           return {...state};
          // return state;   
   }
}
function CounterObjUsingReducer() {
    const [newState,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
            <div>
            <button onClick={()=>dispatch({type:'Increment',value:1})}>IncrementBy1</button>
            </div>
            <div>
            <button onClick={()=>dispatch({type:'Increment',value:5})}>IncrementBy5</button>
            </div>
            <div>
            <button onClick={()=>dispatch({type:'Increment2',value:1})}>Increment2By1</button>
            </div>
            <div>
            <button onClick={()=>dispatch({type:'Increment2',value:5})}>Increment2By5</button>
            </div>
            <div>
            <button onClick={()=>dispatch({type:'Decrement',value:1})}>DecrementBy1</button>
            </div>
            <div>
            <button onClick={()=>dispatch({type:'Decrement',value:5})}>DecrementBy5</button>
            </div>
            <div>
            <button onClick={()=>dispatch({type:'Decrement2',value:1})}>Decrement2By1</button>
            </div>
            <div>
            <button onClick={()=>dispatch({type:'Decrement2',value:5})}>Decrement2By5</button>
            </div>
            <div>
            <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>
            </div>
            Current Counter1 Value:{newState.firstCounter} Current Counter2 Value:{newState.secondCounter}
        </div>
    )
}

export default CounterObjUsingReducer
