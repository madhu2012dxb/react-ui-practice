import React, { Component } from "react";

class ReactCChildLifeCycle extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "madhu",
      age:10
    };
    console.log("Child Constuctor Called")
  }
  static getDerivedStateFromProps(props:any,state:any){
      console.log("Child getDerivedStateFromProps method called")
      return null;
  }

  componentDidMount(){
      console.log("Child Component Did mount called")
  }
  shouldComponentUpdate(){
    console.log('Child shouldComponentUpdate');
    return true;

  }
  getSnapshotBeforeUpdate(prevProps:any,prevState:any){
    console.log('Child getSnapshotBeforeUpdate');
    return {};
  }
  componentDidUpdate(){
    console.log('Child ComponentDidUpdate');
  }
 

  render() {
    console.log("Child Render Method Called")
    return <div></div>;
  }
}
export default ReactCChildLifeCycle;
