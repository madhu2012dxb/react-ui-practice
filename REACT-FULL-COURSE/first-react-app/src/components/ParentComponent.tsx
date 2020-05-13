import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component<any,any> {
constructor(props:any){
 super(props);
   this.state={
       parentName:'Parent'
   }
  this.clickHandler=this.clickHandler.bind(this);

}

 clickHandler(childnName:any){
     alert(`Hello: ${this.state.parentName} from ${childnName}`);
 }
    render() {
        return (
            <div>
                <ChildComponent clickHandler={this.clickHandler}/>
            </div>
        );
    }
}

export default ParentComponent;