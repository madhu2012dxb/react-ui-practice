import React, { Component } from 'react'

class ClickCounterRP extends Component<any,any> {
    /*constructor(props:any) {
        super(props)
    
        this.state = {
         count:0
        }
    }
    clickHandler=()=>{
       this.setState((prevState:any) =>{
          return {count:prevState.count+1}
       });
     }
     */
 
     render() {
        return (
             <div>
                <button onClick={this.props.clickHandler}>Clicked {this.props.count} times</button>
             </div>
         )
     }
 }
 
 export default ClickCounterRP
