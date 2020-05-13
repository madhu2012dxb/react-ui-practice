import React, { Component } from "react";
import axios from "axios";

class AxiosPostTest extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
 
  submitHandler=(e:any)=>{
  e.preventDefault();    
  console.log('::State::'+this.state.userId);
  axios.post("https://jsonplaceholder.typicode.com/users/1/posts",this.state)
  .then((response)=>{
      console.log(response);
  })
  .catch((error)=>{
    console.log(error);
  });
  
  }
  changeHandler=(e:any)=>{
      this.setState({
           [e.target.name]:e.target.value
      });
  }
  render() {
    const {userId,title,body}=this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>UserId</label>
            <input type="text" name="userId" value={userId} onChange={this.changeHandler} />
          </div>

          <div>
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={this.changeHandler}/>
          </div>

          <div>
            <label>Body</label>
            <input type="text" name="body" value={body} onChange={this.changeHandler}/>
          </div>
          <div>
            <button type="submit">Submit!!!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AxiosPostTest;
