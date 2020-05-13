import React, { Component } from 'react'
import axios from 'axios'

class AxiosIntegration extends Component<any,any> {
    constructor(props:any) {
        super(props);
    
        this.state = {
             posts:[],
             errorMessage:''
        }
    }
    componentDidMount(){
        
        //axios.get("https://jsonplaceholder.typicode.com/users/1/posts")
        axios.get("https://jsonplaceholder.typicode.com/users/1/posts1")
        .then((response)=>{
            this.setState({posts:response.data});
         })
        .catch((error)=>{
            if (error.response) {
                this.setState({errorMessage:error.response.status});   
            }else if(error.request){
                this.setState({errorMessage:error.request}); 
            }
            else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }    
         
        });
    }
    render() {
        const {posts,errorMessage}=this.state;
        return (
            <div>
                List of Posts
                {posts.length?
                 posts.map((post:any)=> <div id={post.id}>{post.title}</div>)
                 :'No Posts'
                }
                {errorMessage?<div>{errorMessage}</div>:''}
            </div>

        )
    }
}

export default AxiosIntegration

/*axios.get(people)
    .then((response) => {
        // Success
    })
    .catch((error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the 
            // browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
*/