const redux=require('redux')
const reduxLogger=require('redux-logger')
const combineReducers=redux.combineReducers;
const logger=reduxLogger.createLogger();
const applyMiddleware=redux.applyMiddleware;
const BUY_CAKE='BUY_CAKE'
const BUY_ICE_CREAM='BUY_ICE_CREAM'

let numOfCakes=0;
let numOfIceCreams=0;
const createStore=redux.createStore;
function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First Redux Action'
    }
}

function buyIceCream(){
    return {
        type:BUY_ICE_CREAM,
        info:'First Redux Action'
    }
}

const initialCakeState={
    numOfCakes:10,
   // numOfIceCreams:20
}
const initialIceCreamState={
    numOfIceCreams:20
}

const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes:state.numOfCakes-1
            };
        /*    case BUY_ICE_CREAM:
                return {
                    ...state,
                    numOfIceCreams:state.numOfIceCreams-1
                }; 
              */    
         default:
                return state;
            
    } 
}

const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type){
          case BUY_ICE_CREAM:
                return {
                    ...state,
                    numOfIceCreams:state.numOfIceCreams-1
                };   
         default:
                return state;
            
    } 
}
const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
});
const store=createStore(rootReducer,applyMiddleware(logger));
console.log('Initial State',store.getState())
//logger will subscribe and log activies ,even if your remove subsncribe

const unsubscribe=store.subscribe(()=>{
console.log('Updated State',store.getState())
//{ cacke: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
//--console.log('Updated State',store.getState().cake)
//{ numOfCakes: 6 }
//--console.log('Updated State',store.getState().iceCream)
//{ numOfIceCreams: 20 }
})
//subscribe method retuns unsubscribe function
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();//unscubscribe the listner
