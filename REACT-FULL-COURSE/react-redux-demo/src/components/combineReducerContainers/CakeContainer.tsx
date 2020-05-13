import React,{useState} from 'react'
import {buyCake} from '../../redux/combinedReducer'
import {connect} from 'react-redux'
//<button onClick={()=>{return props.buyCake(number)}}>Buy Cake</button> works
//<button onClick={()=>{props.buyCake(number)}}>Buy Cake</button> works 

function CakeContainer(props:any) {
    const [number,setNumber]=useState(1);
    return (
        <div>
            <h2>Number Of Cakes:{props.noOfCakes}</h2>
            <input type="text" value={number} onChange={(e)=>setNumber(+e.target.value)}/>
            
            <button onClick={()=>props.buyCake(number)}>Buy Cake</button>
        </div>
    )
}
//mapStateToProps can be names anything ,but this is jsut convention to undertsand whoever looks into code

const mapStateToProps=(state:any)=>{
    console.log('mapStateToProps')
    return {
        noOfCakes:state.cake.noOfCakes
    }
}

const mapDispatchToPros=(dispatch:any)=>{
       return {
       //buyCake: ()=> {return dispatch(buyCake())}
       buyCake: (number:any)=> dispatch(buyCake(number))
    } 
}

export default connect(mapStateToProps,mapDispatchToPros)(CakeContainer)
//this highr order wrapped contaienr comp used in app.tsx 
//that passes connect passed functions as properties to contaienr compoent

