import React, { Component } from 'react'

export class Input extends Component<any,any> {
    private inputRef:any;
    constructor(props:any) {
        super(props)
        this.inputRef=React.createRef();
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }
    focusInputMad(){
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default Input
