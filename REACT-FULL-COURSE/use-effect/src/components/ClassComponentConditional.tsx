import React, { Component } from 'react'

class ClassComponentConditional extends Component<any,any> {
    constructor(props:any) {
        super(props)
    
        this.state = {
            count:0,
            name:'' 
        }
    }
    componentDidMount(){
        document.title=`You have clicked ${this.state.count} times`
        //use backticks for tempalte string 
        //it will not work document.title='You have clicked ${this.state.count} times'

    }
    componentDidUpdate(prevProps:any,prevState:any){
        if(prevState.count!==this.state.count){
          console.log('Update Document Title')   
          document.title=`You have clicked ${this.state.count} times`
        }


    }
    clickHandler=()=>{
        this.setState((prevState:any)=>({
            count:prevState.count+1
        }));

    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} 
                onChange={(e)=>{this.setState({name:e.target.value});
                }}/>
                <button onClick={this.clickHandler}>Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassComponentConditional
