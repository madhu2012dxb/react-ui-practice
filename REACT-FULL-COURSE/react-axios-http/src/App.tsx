import React from 'react';
import logo from './logo.svg';
import './App.css';
import AxiosIntegration from './components/AxiosIntegration';
import AxiosPostTest from './components/AxiosPostTest';

function App() {
  return (
    <div className="App">
      <AxiosPostTest/>
     {/*<AxiosIntegration/>*/}
    </div>
  );
}

export default App;
