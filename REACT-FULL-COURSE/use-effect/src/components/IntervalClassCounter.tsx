import React, { Component } from 'react'

class IntervalClassCounter extends Component<any,any> {
    intervalRef:any
    constructor(props:any) {
        super(props)
        this.state = {
            count:0 
        }
    }
    componentDidMount(){
        this.intervalRef=setInterval(this.tick,1000);
    }
    tick=()=>{
        this.setState({
            count:this.state.count+1
        });
    }
    componentWillUnmount(){
        clearInterval(this.intervalRef);
    }
    render() {
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}

export default IntervalClassCounter
