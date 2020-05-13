import React,{useEffect,useState} from 'react'
import axios from 'axios'

function UseEffectAxiosHttpGetByIdOnButtonClick(props:any) {
    const [post,setPost]=useState({id:0,title:''})
    const [id,setId]=useState(1)
    const [buttonClickId,setButtonClickId]=useState(0); 
    
    const handleClick=()=>{
        setButtonClickId(id);
    }
    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
       .then(response=>{
           console.log(response.data)
           setPost(response.data);
       })
       .catch(error=>{
           console.log(error)
       })

    },[buttonClickId]);
    //if you remove none empty watcher array then it will go in loop state as state changed and rerender happens infinitely
    return (
        <div>
            <label>Enter PostId:</label>
            <input type="text" value={id} onChange={e=>{setId(+(e.target.value))}}/>
            <button onClick={handleClick}>Click</button>
            <div>Title:{post.title}</div>
        </div>
    )
}

export default UseEffectAxiosHttpGetByIdOnButtonClick
