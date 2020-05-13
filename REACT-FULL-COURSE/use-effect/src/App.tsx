import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FuncCompUseEffect from './components/FuncCompUseEffect';
import ClassComponentConditional from './components/ClassComponentConditional';
import FuncCompUseEffectConditional from './components/FuncCompUseEffectConditional';
import ClassComponentDidMount from './components/ClassComponentDidMount';
import FuncCompDidMount from './components/FuncCompDidMount';
import ToggleContainerToCheckUnmount from './components/ToggleContainerToCheckUnmount';
import IntervalClassCounter from './components/IntervalClassCounter';
import FunCompUseEffectInvalidDep from './components/FunCompUseEffectInvalidDep';
import UseEffectAxiosHttpGet from './components/UseEffectAxiosHttpGet';
import UseEffectAxiosHttpGetById from './components/UseEffectAxiosHttpGetById';
import UseEffectAxiosHttpGetByIdOnButtonClick from './components/UseEffectAxiosHttpGetByIdOnButtonClick';

function App() {
  return (
    <div className="App">
      <UseEffectAxiosHttpGetByIdOnButtonClick/>
      {/*<UseEffectAxiosHttpGetById/>*/}
      {/*<UseEffectAxiosHttpGet/>*/}
      {/*<FunCompUseEffectInvalidDep/>*/}
      {/* <IntervalClassCounter/> */}
      {/*<ToggleContainerToCheckUnmount/>*/}
      {/*<FuncCompDidMount/>*/}
      {/*<ClassComponentDidMount/>*/}
      {/* <FuncCompUseEffectConditional/>*/}
      {/*<ClassComponentConditional/>*/}
      {/*<FuncCompUseEffect/>*/}
      {/*<ClassComponent/>*/}
    </div>
  );
}

export default App;
