import React, { Component } from "react";

class CountClassComp extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    };
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.setCount}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default CountClassComp;
