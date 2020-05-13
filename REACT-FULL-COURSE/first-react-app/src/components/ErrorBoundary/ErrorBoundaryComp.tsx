import React, { Component } from 'react'

class ErrorBoundaryComp extends Component<any,any> {
    constructor(props:any) {
        super(props)
    
        this.state = {
        hasError:false         
        }
    }
    
    static getDerivedStateFromError(error:any){
        return {hasError:true };

    }

    componentDidCatch(error:any,info:any){
     console.log('error:'+error+',info:'+info);
    }

    render() {
        if(this.state.hasError){
            return (
                <div>
                  <h1>Something went wrong!!!</h1>  
                </div>
            )
        }
        return this.props.children;
        
    }
}

export default ErrorBoundaryComp;
