import React from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'
function CakeContainer(props:any) {
    return (
        <div>
            <h2>Number Of Cakes:{props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
//mapStateToProps can be names anything ,but this is jsut convention to undertsand whoever looks into code

const mapStateToProps=(state:any)=>{
    console.log('mapStateToProps')
    return {
        noOfCakes:state.noOfCakes
    }
}

const mapDispatchToPros=(dispatch:any)=>{
       return {
       //buyCake: ()=> {return dispatch(buyCake())}
       buyCake: ()=> dispatch(buyCake())
    } 
}

export default connect(mapStateToProps,mapDispatchToPros)(CakeContainer)
//this highr order wrapped contaienr comp used in app.tsx 
//that passes connect passed functions as properties to contaienr compoent

