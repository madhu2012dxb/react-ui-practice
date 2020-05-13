import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component<any,any> {
    super(props:any){
        this.state={name:'Madhu'};
    }
    componentDidMount(){
        console.log("*****Parent Comp Did Mount******");
        setInterval(()=>{
         this.setState({
             name:'Madhu'
         });
        },5000);
    }
    render() {
        console.log('Parent Component render called')
        return (
            
            <div>
                This is parent Component
                <PureComp/>
                <RegComp/>
            </div>
        )
    }
}
export default ParentComp;
