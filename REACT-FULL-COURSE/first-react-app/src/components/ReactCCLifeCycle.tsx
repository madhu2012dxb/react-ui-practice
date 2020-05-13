import React, { Component } from "react";
import ReactCChildMountingLifeCycle from "./ReactCChildLifeCycle";
import ReactCChildLifeCycle from "./ReactCChildLifeCycle";

class ReactCCLifeCycle extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "madhu",
      age:10
    };
    console.log("Constuctor Called")
  }
  static getDerivedStateFromProps(props:any,state:any){
      console.log("getDerivedStateFromProps method called")
      return {
        name: "madhu",
        age:10
      };
  }

  componentDidMount(){
      console.log("Component Did mount called")
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;

  }
  getSnapshotBeforeUpdate(prevProps:any,prevState:any){
    console.log('getSnapshotBeforeUpdate');
    return {};
  }
  componentDidUpdate(){
    console.log('ComponentDidUpdate');
  }
  stateChange=()=>{
    this.setState({name: "madhu",
    age:20});
  }

  render() {
    console.log("Render Method Called");
    //return <div><ReactCChildLifeCycle/></div><div><button onClick={this.stateChange}>Click</button></div>;
    //return <div><div><ReactCChildLifeCycle/></div><div><button onClick={this.stateChange}>Click</button></div></div>;
    return <><div><ReactCChildLifeCycle/></div><div><button onClick={this.stateChange}>Click</button></div></>;
  
  }
}
export default ReactCCLifeCycle;
