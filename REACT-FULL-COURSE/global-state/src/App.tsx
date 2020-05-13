import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
  //var countState:number;
  //var countDispatch:any;
  export const CountContext=React.createContext({countState:0,countDispatch:(test:any)=>{}});
  const initialState:number=0;
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

function App() {
  const [count,dispatch]=useReducer(reducer,initialState);
  return (
    <div className="App">
     <CountContext.Provider value={{countState:count,countDispatch:dispatch}}> 
      Count App:{count}
     <ComponentA/>
     <ComponentB/>
     </CountContext.Provider>
    </div>
  );
}

export default App;
