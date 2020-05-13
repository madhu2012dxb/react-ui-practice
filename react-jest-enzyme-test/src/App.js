import React, { Component } from "react";
import Header from "./component/header";
import "./app.scss";
import Headline from "./component/headline";
import SharedButton from "./component/button";
import ListItem from "./component/listitem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";

const tempArr = [
  {
    fName: "Joe",
    lName: "bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];
const initialState = {
  hideBtn: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updateState();
  }
  exampleMethod_updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn,
    });
  }
  exampleMethod_returnAsValue(num){
  return num+1
  }
  render() {
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    };
    const { posts } = this.props;
    const { hideBtn } = this.state;
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          {!hideBtn && <SharedButton {...configButton} />}

          {posts && posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state.posts", state.posts);
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
