import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const noOfCakes=useSelector((state:any)=>{return state.noOfCakes});
    //const noOfCakes=useSelector((state:any)=>state.noOfCakes);  
    const dispatch=useDispatch();

    return (
        <div>
            <h2>Number Of Cakes:{noOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )

}

export default HooksCakeContainer
