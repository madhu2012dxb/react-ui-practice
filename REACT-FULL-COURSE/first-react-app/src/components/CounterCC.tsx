import React, { Component } from 'react';

class CounterCC extends Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state={
            count:0,
            message:'Counter Test'
        }
    }

    incrementCount(){
      /*  this.setState({
            count:this.state.count+1
        },()=>{
            console.log("After state changed ad before render",this.state.count)
        });
        console.log("sync counter value:",this.state.count)
        */
       this.setState((prevState:any,props:any)=>(
        {
            count:prevState.count+1
        }),()=>{
            console.log("sync counter value:",this.state.count)

        }
       );
    }
    incrementFive(){
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();

    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message} : {this.state.count}</h1>
                <h2><button onClick={()=>{this.incrementFive()}}>Increment</button></h2>
            </div>
        );
    }
}

export default CounterCC;