const redux=require('redux')
const BUY_CAKE='BUY_CAKE'
let numOfCakes=0;
const createStore=redux.createStore;
function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First Redux Action'
    }
}

const initialState={
    numOfCakes:10
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes:state.numOfCakes-1
            };
         default:
            //return state;
            return {...state}; 

    } 
}
const store=createStore(reducer);
console.log('Initial State',store.getState())
const unsubscribe=store.subscribe(()=>{console.log('Updated State',store.getState())})
//subscribe method retuns unsubscribe function
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();//unscubscribe the listner






