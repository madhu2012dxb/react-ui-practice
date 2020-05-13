import React from 'react'
import {buyIceCream} from '../../redux/combinedReducer'
import {connect} from 'react-redux'
function IceCreamContainer(props:any) {
    return (
        <div>
            <h2>Number Of IceCreams:{props.noOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}
//mapStateToProps can be names anything ,but this is jsut convention to undertsand whoever looks into code

const mapStateToProps=(state:any)=>{
    console.log('mapStateToProps')
    return {
        noOfIceCreams:state.iceCream.noOfIceCreams
    }
}

const mapDispatchToPros=(dispatch:any)=>{
       return {
       //buyCake: ()=> {return dispatch(buyCake())}
       buyIceCream: ()=> dispatch(buyIceCream())
    } 
}

export default connect(mapStateToProps,mapDispatchToPros)(IceCreamContainer)
//this highr order wrapped contaienr comp used in app.tsx 
//that passes connect passed functions as properties to contaienr compoent

