import React,{useState,useEffect} from 'react'
import axios from 'axios'
    
function UseStateDataFetch() {
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    const [post,setPost]=useState({title:''});
    useEffect(
        ()=>{
             ///axios.get(`https://jsonplaceholder.typicode.com/posts/XX`)
             axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
             .then(response=>{
                 setPost(response.data);
                 setError('');
                 setLoading(false);
             })
             .catch(error=>{
                 setError('Something Went Wrong');
                 setLoading(false);
             })
        },[]
    );

    return (
        <div>
            <div>
            Post Title:{post.title}
            </div>
            {error?error:null}
            {loading?'Loading..':null}
        </div>
    )
}

export default UseStateDataFetch
