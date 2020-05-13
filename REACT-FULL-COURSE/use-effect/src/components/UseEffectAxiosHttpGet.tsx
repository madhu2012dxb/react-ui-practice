import React,{useEffect,useState} from 'react'
import axios from 'axios'

function UseEffectAxiosHttpGet(props:any) {
    const [posts,setPosts]=useState([{id:0,title:''}])
    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts`)
       .then(response=>{
           console.log(response.data)
           setPosts(response.data);
       })
       .catch(error=>{
           console.log(error)
       })

    },[]);
    //if you remove none empty watcher array then it will go in loop state as state changed and rerender happens infinitely
    const itemArrayNew=posts.map(post=>{
        return <li key={post.id}>{post.title}</li>
       });
    return (
        <div>
         <ul>   
        {/* {posts.map(post=>( 
          <li key={post.id}>{post.title}</li>
          ))}
        */}
        {/*{posts.map(post=>{
         return <li key={post.id}>{post.title}</li>
        })}
       */}
       {itemArrayNew}

          </ul>
        </div>
    )
}

export default UseEffectAxiosHttpGet
