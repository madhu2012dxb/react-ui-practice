import React, { Component } from 'react'

export class CounterRP extends Component<any,any> {
    
    constructor(props:any) {
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
    render() {
        return (
            <div>
              {this.props.render(this.state.count,this.clickHandler)}
        {/* {this.props.children(this.state.count,this.clickHandler)} */}

            </div>
        )
    }
}

export default CounterRP
