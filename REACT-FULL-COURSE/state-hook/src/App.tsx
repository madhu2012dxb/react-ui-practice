import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountClassComp from './components/CountClassComp';
import CounterHookFunctionalComp from './components/CounterHookFunctionalComp';
import UsePrevSateWithuseState from './components/UsePrevSateWithuseState';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseStateWithArray from './components/UseStateWithArray';

function App() {
  return (
    <div className="App">
    <UseStateWithArray/>
     {/* <UseStateWithObjects/> */}
     {/* <UsePrevSateWithuseState/> */}
      {/*<CounterHookFunctionalComp/>*/}
    {/* <CountClassComp/> */}
    </div>
  );
}

export default App;
