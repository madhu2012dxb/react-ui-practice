import React, { Component } from 'react'
import Input from './Input'

class ParentRefComp extends Component<any,any> {
    private componentRef:any;
    constructor(props:any) {
        super(props);
        this.componentRef=React.createRef();
    }
    
    clickHandler=()=>{
        this.componentRef.current.focusInputMad();
    };

    render() {
        return (
            <div>
            <Input ref={this.componentRef}/>   
            <button onClick={this.clickHandler}>Click</button>        
            </div>
        )
    }
}

export default ParentRefComp
