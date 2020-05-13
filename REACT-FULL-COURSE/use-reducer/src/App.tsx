import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterUsingReducer from './components/CounterUsingReducer';
import CounterObjUsingReducer from './components/CounterObjUsingReducer';
import MultiplUseReducers from './components/MultiplUseReducers';
import UseStateDataFetch from './components/useStateDataFetch/UseStateDataFetch';
import UseReducerDataFetch from './components/useStateDataFetch/UseReducerDataFetch';

function App() {
  return (
    <div className="App">
     <UseReducerDataFetch/> 
     {/*<UseStateDataFetch/>*/} 
     {/*<CounterUsingReducer/>*/}
     {/*<CounterObjUsingReducer/>*/}
     {/*<MultiplUseReducers/>*/}
    </div>
  );
}

export default App;
