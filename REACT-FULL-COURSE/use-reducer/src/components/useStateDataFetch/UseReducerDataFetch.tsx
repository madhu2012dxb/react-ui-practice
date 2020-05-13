import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState={post:{},error:'',loading:false}
const reducer=(state:any,action:any)=>{
      switch(action.type){
           case 'FETCH_SUCCESS':
            return {loading:false,error:'',post:action.payload}
           case 'FETCH_FAILURE':
            return {loading:false,error:'Something Went Wrong',
           post:{}}
           default:
            return state;
   }
}

function UseReducerDataFetch() {
    const [state,dispatch]=useReducer(reducer,initialState);
    useEffect(()=>{
        //axios.get(`https://jsonplaceholder.typicode.com/posts/X`)
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
             .then(response=>{
                dispatch({type:'FETCH_SUCCESS',payload:response.data});
             })
             .catch(error=>{
                dispatch({type:'FETCH_FAILURE',payload:{}});
             })

    },[]);
    return (
        <div>
            <div>
            <h1>Post Title</h1>{state.post.title}
            </div>
            {state.error?state.error:null}
            {state.loading?'Loading..':null}
        </div>
    )
}

export default UseReducerDataFetch
