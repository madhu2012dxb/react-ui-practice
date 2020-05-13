const redux=require('redux')

const BUY_CAKE='BUY_CAKE'
const BUY_ICE_CREAM='BUY_ICE_CREAM'

let numOfCakes=0;
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

const initialState={
    numOfCakes:10,
    numOfIceCreams:10
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes:state.numOfCakes-1
            };
        case BUY_ICE_CREAM:
                return {
                    ...state,
                    numOfIceCreams:state.numOfIceCreams-1
                };   
         default:
                return state;
            
    } 
}
const store=createStore(reducer);
console.log('Initial State',store.getState())
const unsubscribe=store.subscribe(()=>{console.log('Updated State',store.getState())})
//subscribe method retuns unsubscribe function
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();//unscubscribe the listner
