import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import {findByTestAttr} from './../../../Utils'
const setUp=(props={})=>{
  return shallow(<Header {...props}/>);
}


describe("Component Header", () => {
    let component;
    beforeEach(()=>{
      component=setUp();
    })
    it("Should reder without any errors", () => {
      // const component = setUp({name:'TestingFuncComponent'});
       console.log(component.debug());
       const wrapper = component.find("[data-test='headerComponent']");
       expect(wrapper.length).toBe(1);
     });

     it("Should reder a logo", () => {
      // const component = setUp();
       console.log(component.debug());
       const logo = findByTestAttr(component,"logoIMG");
       expect(logo.length).toBe(1);
     });
     

     

  /*it("Should reder without any errors", () => {
   // const component = setUp({name:'TestingFuncComponent'});
    console.log(component.debug());
    const wrapper = component.find(".headerComponent");
    expect(wrapper.length).toBe(1);
  });
  */
  /*it("Should reder a logo", () => {
   // const component = setUp();
    console.log(component.debug());
    const logo = component.find(".logoIMG");
    expect(logo.length).toBe(1);
  });
  */



  /* it('It should reder without any errors',()=>{
       expect(1).toBe(3)
     });

     it('It should reder without any errors',()=>{
        expect(1).toBe(1)
     });

     */
});
