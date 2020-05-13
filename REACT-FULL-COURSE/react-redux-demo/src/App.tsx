import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
//--import store from './redux/cakes/store'
//----import store from './redux/combinedReducer/store'
import store from './redux/users/store'
//--import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import CakeContainer from './components/combineReducerContainers/CakeContainer';
import IceCreamContainer from './components/combineReducerContainers/IceCreamContainer';
import ConnectWrappedOwnedPropItemContainer from './components/OwnedPropItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    //IMPORTANT TO PLACE AT ROOT LEVEL
    <Provider store={store}> 
    <div className="App">
      {/*<CakeContainer/>*/}
      {/*<HooksCakeContainer/>*/}
      {/*<ConnectWrappedOwnedPropItemContainer cake/>
      <ConnectWrappedOwnedPropItemContainer/>
      <CakeContainer/>
      <IceCreamContainer/>
      */}
      <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
