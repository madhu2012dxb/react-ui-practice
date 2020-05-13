import React, { Component } from 'react'

class ClassComponent extends Component<any,any> {
    constructor(props:any) {
        super(props)
    
        this.state = {
            count:0 
        }
    }
    componentDidMount(){
        document.title=`You have clicked ${this.state.count} times`
        //use backticks for tempalte string 
        //it will not work document.title='You have clicked ${this.state.count} times'

    }
    componentDidUpdate(){
        document.title=`You have clicked ${this.state.count} times`
    }
    clickHandler=()=>{
        this.setState((prevState:any)=>({
            count:prevState.count+1
        }));

    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassComponent
