import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputFieldWithUseRefHook from './InputFieldWithUseRefHook';
import ClassTimer from './ClassTimer';
import FuncCompTimerWithRef from './FuncCompTimerWithRef';

function App() {
  return (
    <div className="App">
     {/*<InputFieldWithUseRefHook/>*/}
     {/*<ClassTimer/>*/}
     <FuncCompTimerWithRef/>
    </div>
  );
}

export default App;
