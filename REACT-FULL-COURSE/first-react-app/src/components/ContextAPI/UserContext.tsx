import React from 'react'
const UserContext:any=React.createContext('DefaultGlbValueIfPr');
//const UserContext:any=React.createContext(null);

const UserProvider:any=UserContext.Provider;
const UserConsumer:any=UserContext.Consumer;

//export {UserProvider,UserConsumer};
export {UserProvider,UserConsumer,UserContext};
