import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "./../Utils";
import App from "./App";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  console.log(wrapper.debug())
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: "Test Title 1", body: "Test Body 1" },
        { title: "Test Title 2", body: "Test Body 2" },
        { title: "Test Title 3", body: "Test Body 3" },
      ],
    };
    wrapper = setUp(initialState);
  });

  it("Component should render without errors", () => {
    const component = findByTestAttr(wrapper, 'appComponent');
    //console.log('App component:',component.debug())
    expect(component.length).toBe(1);
    //expect(wrapper.length).toBe(1);
    
  });
  
  it('exampleMethod_updateState shoud update state as expected',()=>{
    const classInstance=wrapper.instance();
    classInstance.exampleMethod_updateState();
    const newState=classInstance.state.hideBtn;
    expect(newState).toBe(true);
  })

  it('exampleMethod_updateState shoud update state as expected',()=>{
    const classInstance=wrapper.instance();
    const newValue=classInstance.exampleMethod_returnAsValue(6);
    expect(newValue).toBe(7);
  })


});
