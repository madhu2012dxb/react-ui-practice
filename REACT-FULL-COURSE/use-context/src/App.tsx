import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponetFCCA from "./components/multipleContext/ComponetFCCA";
export const UserContext = React.createContext("Madhu");
export const ChannelContext = React.createContext("CodeEvolution");
function App() {
  return (
    <div className="App">
      <UserContext.Provider value="Madhavi">
        <ChannelContext.Provider value="CodeEvolution">
          <ComponetFCCA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
