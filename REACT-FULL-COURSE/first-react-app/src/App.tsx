import React, { Component } from 'react';
//import Greet from './components/Greet';
import {Greet} from './components/Greet';
import logo from './logo.svg';
import './App.css';
import WelcomeC from './components/WelcomeC'
import TestJSXAndJS from './components/TestJSXAndJS'
import PropsCCTest from './components/PropsCCTest.jsx'
import {PropsFC} from './components/PropsFC'
import StateCC from './components/StateCC'
import CounterCC from './components/CounterCC';
import ClassCClick from './components/ClassCClick';
import FunctionalCClick from './components/FunctionalCClick';
import EventHandlingDemo from './components/EventHandlingDemo';
import ParentComponent from './components/ParentComponent';
import ConditionalComponentTest from './components/ConditionalComponentTest';
import ListComponent from './components/ListComponent';
import SyleSheetComponent from './components/StyleSheetComponent';
import InlineStyleFC from './components/InlineStyleFC';
import './css/AppStyles.css'
import styles from './css/AppStyles.module.css'
import ReactFormClassComponent from './components/ReactFormClassComponent';
import ReactCCMountingLifeCycle from './components/ReactCCLifeCycle';
import ReactCCLifeCycle from './components/ReactCCLifeCycle';
import ReactFragmentDemo from './components/ReactFragmentDemo';
import FragmentTable from './components/FragmentTable';
import ParentComp from './components/pureCompDemo/ParentComp';
import ParentMemoComp from './components/MemoCompDemo/ParentComp';
import RefsDemo from './components/RefsDemo';
import ParentRefComp from './components/RefsWithClassComp/ParentRefComp';
import ParentClassComp from './components/RefForwarding/ParentClassComp';
import ParentDemoRootComp from './components/PortalsDiffDomRoot/ParentDemoRootComp';
import ErrorBoundaryComp from './components/ErrorBoundary/ErrorBoundaryComp';
import Hero from './components/ErrorBoundary/Hero';
import ClickCounter from './components/higherOrderComponents/ClickCounter';
import ClickCounterRP from './components/renderProps/ClickCounterRP';
import CounterRP from './components/renderProps/CounterRP';
import CompA from './components/ContextAPI/CompA';
import { UserProvider } from './components/ContextAPI/UserContext';
import CompB from './components/ContextAPI/CompB';

class App extends Component<any,any>{
  render(){
   return (
   <div className="App">
    {/*}
    <CompA/>
   */}
     
     <UserProvider value='Madhu'>
      <CompA/>
     </UserProvider>
     

    {/*} <CounterRP> {
       (count:any,clickHandler:any)=>(
         <ClickCounterRP count={count} clickHandler={clickHandler} />
       )
     }/</CounterRP>
    */}
     
     {/*<CounterRP render={
       (count:any,clickHandler:any)=>(
         <ClickCounterRP count={count} clickHandler={clickHandler} />
       )
     }/>
    */}
    
    {/* <ClickCounter/> */}
     {/*} <ErrorBoundaryComp>
       <Hero heroName='Batman'/>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
       <Hero heroName='Superman'/>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
       <Hero heroName='Joker'/>
      </ErrorBoundaryComp>
      */}
     {/*<ParentDemoRootComp/>*/}
     {/*<ParentClassComp/>*/}
    {/* <ParentRefComp/> */}
     {/*<RefsDemo/>*/}
     {/*<ParentMemoComp/> */}
     {/*<ParentComp/>*/}
     {/*<FragmentTable/>*/}
     {/*<ReactFragmentDemo/>*/}
    {/* <ReactCCLifeCycle/> */}
    {/*<ReactFormClassComponent/> */}
     {/*<h1 className='error'>Error</h1>
     <h1 className={styles.success}>Success</h1>
     <InlineStyleFC/>
   */}
     {/*<SyleSheetComponent primary={true}/>*/}
     {/*<ListComponent/> */}
    {/* <ConditionalComponentTest/> */}
   {/*  <ParentComponent/> */}
   {/*  <EventHandlingDemo/> */}
   {/*}  <ClassCClick/>
     <FunctionalCClick/>
     */}
    {/* <CounterCC/>
     <StateCC/>
    <Greet name="madhu" age={39}/>
    <WelcomeC/>
    <TestJSXAndJS/>
    <PropsCCTest name="madhu" age={22}>
            hi this is child 1
    </PropsCCTest>
    <PropsFC name="madhu" age={22}>
      this is child 2
    </PropsFC>
   */}

   </div>
   )

  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
          Learn React
       </header>
     
    </div>
  );
}

*/


export default App;
