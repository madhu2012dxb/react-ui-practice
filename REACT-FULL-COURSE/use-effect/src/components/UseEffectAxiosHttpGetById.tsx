import React,{useEffect,useState} from 'react'
import axios from 'axios'

function UseEffectAxiosHttpGetById(props:any) {
    const [post,setPost]=useState({id:0,title:''})
    const [id,setId]=useState(1) 
    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(response=>{
           console.log(response.data)
           setPost(response.data);
       })
       .catch(error=>{
           console.log(error)
       })

    },[id]);
    //if you remove none empty watcher array then it will go in loop state as state changed and rerender happens infinitely
    return (
        <div>
            <label>Enter PostId:</label>
            <input type="text" value={id} onChange={e=>{setId(+(e.target.value))}}/>
            <div>Title:{post.title}</div>
        </div>
    )
}

export default UseEffectAxiosHttpGetById
