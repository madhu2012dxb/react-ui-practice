import React from 'react'
import {connect} from 'react-redux' 
import {buyCake,buyIceCream} from '../redux/combinedReducer'
function OwnedPropItemContainer(props:any) {
    return (
        <div>
            Item:{props.item}
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}
const mapStateToProps=(state:any,ownedProps:any)=>{
    const item=ownedProps.cake?state.cake.noOfCakes:state.iceCream.noOfIceCreams;
    return {
        item:item
    }
}
const mapDispatchToProps=(dispatch:any,ownedProps:any)=>{
    const dispatchFunction=ownedProps.cake?()=>dispatch(buyCake()):
    ()=>dispatch(buyIceCream())
    return {
        buyItem:dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OwnedPropItemContainer)
