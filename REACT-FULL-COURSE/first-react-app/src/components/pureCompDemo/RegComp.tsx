import React, { Component } from 'react'

class RegComp extends Component<any,any> {
    render() {
        console.log('RegComp render called');
        return (
            <div>
               This is Reg Component name from parent:{this.props.name} 
            </div>
        )
    }
}
export default RegComp;
