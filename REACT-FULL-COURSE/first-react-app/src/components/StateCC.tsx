import React, { Component } from 'react';

class StateCC extends Component<any,any> {
   constructor(props:any){
       super(props);
       this.state={
           message:'welecome visitor'
       }
   }
   onClickHandler():void{
       this.setState({
           message:'Thank You for Suscbribing...'
       });
   }
   //this is java script methid so no function keyword

    render() {
        return (
            <div>
             <h1>{this.state.message}</h1>
             {/*<h2><button onClick={()=>this.onClickHandler()}>Subscribe</button></h2>
             */}
             <h2><button onClick={()=>this.onClickHandler()}>Subscribe</button></h2>
            </div>
        );
    }
}

export default StateCC;