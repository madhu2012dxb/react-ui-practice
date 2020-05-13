import React, { Component } from 'react'

class ClassComponentDidMount extends Component<any,any> {
    constructor(props:any) {
        super(props)
        this.state = {
             x:0,
             y:0
        }
    }
    logMousePosition=(e:any)=>{
     this.setState({
        x:e.clientX,y:e.clientY
     });
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.logMousePosition);
    }

    render() {
        return (
            <div>
               Mouse Cooridnates X: {this.state.x} Y:{this.state.y} 
            </div>
        )
    }
}

export default ClassComponentDidMount
