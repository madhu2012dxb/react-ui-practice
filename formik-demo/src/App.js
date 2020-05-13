import React from 'react';
import logo from './logo.svg';
import './App.css';
import YoutubeFrom from './components/YoutubeFrom'
import YoutubeFromYupValidation from './components/YoutubeFromYupValidation'
function App() {
  return (
    <div className="App">
     {/*<YoutubeFrom/>
     */}
     <YoutubeFromYupValidation/>
    </div>
  );
}

export default App;
