import {BUY_CAKE} from './CakeTypes'
const intitialState={
    noOfCakes:10
}
const cakeReducer=(state=intitialState,action:any)=>{
    switch(action.type){
      case BUY_CAKE:
          return {
              ...state,
              noOfCakes:state.noOfCakes-1
          }
      default:
          return state;    
    }


}
export default cakeReducer
