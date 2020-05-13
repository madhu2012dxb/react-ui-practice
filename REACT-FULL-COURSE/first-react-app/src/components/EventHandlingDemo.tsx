import React, { Component } from 'react';

class EventHandlingDemo extends Component<any,any> {
    constructor(props:any){
     super(props);
     this.state={
         count:0
     }
     //this.clickHandler=this.clickHandler.bind(this);
    }



  /*  need to bind this clickHandler(){
        this.setState({
            count:this.state.count+1
        })
    }
    */
  /* clickHandler(){
    this.setState({
        count:this.state.count+1
    })
   }
   */
  //class property
  clickHandler=()=>{
    this.setState({
        count:this.state.count+1
    })
  }
  //const a=10; not allowed

    render() {
        return (
            <div>
                {/*<button onClick={this.clickHandler}>Button</button>*/}
                 count:{this.state.count}
                {/*<button onClick={this.clickHandler.bind(this)}>Button</button>*/}
                {/*<button onClick={()=>this.clickHandler()}>Button</button>*/}
                {/*<button onClick={this.clickHandler}>Button</button>*/}
                <button onClick={this.clickHandler}>Button</button>

                </div>
        );
    }
}

export default EventHandlingDemo;