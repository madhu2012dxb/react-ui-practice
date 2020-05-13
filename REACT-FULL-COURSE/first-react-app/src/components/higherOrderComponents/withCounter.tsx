import React, { Component } from 'react'

const withCounter=(WrappedComponent:any,incrementBy:number) =>{
class WithCounter extends React.Component<any,any>{
    constructor(props:any) {
        super(props)
    
        this.state = {
         count:0
        }
    }
    clickHandler=()=>{
       this.setState((prevState:any) =>{
          return {count:prevState.count+incrementBy}
       });
     }
    render(){
        return <WrappedComponent name='madhu' count={this.state.count} 
        clickHandler={this.clickHandler} {...this.props}/>
    }
}
 return WithCounter;
}
export default withCounter;
