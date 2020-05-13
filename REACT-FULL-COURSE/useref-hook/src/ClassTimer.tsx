import React, { Component } from 'react'

class ClassTimer extends Component<any,any> {
    interval:any;
    constructor(props:any) {
        super(props)
    
        this.state = {
             timer:0
        }
    }
    componentDidMount(){
        this.interval=setInterval(()=>{
        this.setState((prevState:any)=>({timer:prevState.timer+1}));
        },1000);
    }
    componentWillMount(){
        clearInterval(this.interval)
    }
    

    render() {
        return (
            <div>
            <div> 
                Class Timer: {this.state.timer}
            </div>
            <div> 
               <button onClick={()=>clearInterval(this.interval)}>Clear Interval</button>
            </div>
            </div>

        )
    }
}

export default ClassTimer
