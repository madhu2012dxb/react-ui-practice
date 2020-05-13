import React, { Component } from "react";

class ConditionalComponentTest extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    {
      /*}
        return (
            <div>
                <h1>Welcome Madhu</h1>
                <h1>Welcome Guest</h1>
            </div>
        );
        */
    }

    // return (this.state.isLoggedIn && <h1>Welcome Madhu</h1>);

    //  return (this.state.isLoggedIn ? (<h1>Welcome Madhu</h1>) : (<h1>Welcome Guest</h1>));
    {
      /*}  let message;
        if(this.state.isLoggedIn){
            message=<h1>Welcome Madhu</h1>;
        }else{
            message=<h1>Welcome Geust</h1>;
        }

        return <div>{message}</div>
    */
    }
    if (this.state.isLoggedIn) {
      return (
        <div>
          <h1>Welcome Madhu</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome Geust</h1>
        </div>
      );
    }
  }
}

export default ConditionalComponentTest;
