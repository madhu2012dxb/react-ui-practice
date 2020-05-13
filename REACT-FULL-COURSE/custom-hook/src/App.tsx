import React from 'react';
import logo from './logo.svg';
import './App.css';
import DocTitleCounterUpdate from './DocTitleCounterUpdate';
import DocTitleOne from './hooks/DocTitleOne';
import DocTitleTwo from './hooks/DocTitleTwo';
import CounterOne from './hooks/CounterOne';
import CounterTwo from './hooks/CounterTwo';
import NameInputForm from './hooks/NameInputForm';

function App() {
  return (
         <div className="App">
         {/*<DocTitleCounterUpdate/>*/}
         {/*<DocTitleOne/>
         <DocTitleTwo/>
         */}
         {/*<CounterOne/>
         <CounterTwo/>
         */}
         <NameInputForm/>
         </div>
  );
}

export default App;
