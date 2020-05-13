import React, { Component } from 'react'

 class RefsDemo extends Component<any,any> {
    private  inputRef:any;
    private inputRef1:any;
    private setInputRef1:any;
    constructor(props:any) {
        super(props);
        this.inputRef=React.createRef();
        this.inputRef1=null;
        this.setInputRef1=(element:any)=>{
            this.inputRef1=element;
        }
    }
    componentDidMount(){
        if(this.inputRef1){
          this.inputRef1.focus();
        }
        //this.inputRef.current.focus();
    }
    clickHandler=()=>{
        alert(':::'+this.inputRef.current.value);
    }
    render() {
        return (
            <div>
             <input type="text" ref={this.inputRef}/>
             <input type="text" ref={this.setInputRef1}/>
             <button onClick={this.clickHandler}>Click</button>   
            </div>
        )
    }
}

export default RefsDemo;
