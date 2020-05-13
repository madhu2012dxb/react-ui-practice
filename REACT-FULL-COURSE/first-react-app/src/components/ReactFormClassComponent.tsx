import React, { Component } from 'react'

class ReactFormClassComponent extends Component<any,any> {
    
    constructor(props:any) {
        super(props);
        this.state = {
                     name:'',
                     comment:'',
                     topic:''      
        };
    }
        
    nameChangeHandler=(event:any)=>{
             this.setState({
                 name:event.target.value
             });
    }
    commentChangeHandler=(event:any)=>{
        this.setState({
            comment:event.target.value
    });
   }

    topicChangeHandler=(event:any)=>{
        this.setState({
            topic:event.target.value
    });
   }

   onSubmitHandler=(event:any)=>{
    alert(`${this.state.name}:${this.state.comment}:${this.state.topic}`)
    event.preventDefault();//to avoid page refresh
    }

    render() {
        const {name,comment,topic}=this.state;
        return (
             <form onSubmit={this.onSubmitHandler}>
               <div>  
               <label>Name</label>
               <input type="text" value={name} onChange={this.nameChangeHandler}/>
               </div>
               <div>  
               <label>Comment</label>
               <textarea value={comment} onChange={this.commentChangeHandler}/>
               </div>
               <div>  
               <label>Topic</label>
               <select value={topic} defaultValue='Education' onChange={this.topicChangeHandler}>
                <option value='Education'>Education</option>
                <option value='Politics'>Politics</option>
                <option value='Sports'>Sports</option>
               </select>
               </div>
               <div>
                   <button type="submit">Submit</button>
               </div>
               
               
                 
             </form>
        )
    }
}

export default  ReactFormClassComponent;