import {BUY_ICECREAM} from './IceCreamTypes'
const intitialState={
    noOfIceCreams:10
}
const iceCreamReducer=(state=intitialState,action:any)=>{
    switch(action.type){
      case BUY_ICECREAM:
          return {
              ...state,
              noOfIceCreams:state.noOfIceCreams-1
          }
      default:
          return state;    
    }


}
export default iceCreamReducer
