import React, { Component } from 'react'
import ChildFuncComponent from './ChildFuncComponent';

class ParentClassComp extends Component<any,any> {
    private compRef:any;
    constructor(props:any) {
        super(props)
         this.compRef=React.createRef();
    }
    clickHanlder=()=>{
        this.compRef.current.focus();
    }
    render() {
        return (
            <div>
                This is parent Comp
                <ChildFuncComponent ref={this.compRef}/>
                <button onClick={this.clickHanlder}>Click</button>
            </div>
        )
    }
}

export default ParentClassComp;
