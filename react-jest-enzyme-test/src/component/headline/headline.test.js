import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAttr,checkProps } from "./../../../Utils";


const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe('Headline Component', () => {
  
  describe('Checking Proptypes',()=>{
    it('Should not throw warning',()=>{
      const expectedProps={
        header:'Test Header',
        desc:'Test Desc',
        tempArr:[
          {
            fName:'Joe',
            lName:'bloggs',
            email:'joebloggs@gmail.com',
            //age:false,
            age:24,
            onlineStatus:true
          }
        ]
      }
      const propsErr=checkProps(Headline,expectedProps)
      expect(propsErr).toBeUndefined()
    })

  })
  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description",
      };
      wrapper = setUp(props);
    });
    it('Should render without any errors',()=>{
        let component=findByTestAttr(wrapper,'HeadlineComponent');
        expect(component.length).toBe(1);
    })

    it('Should render H1',()=>{
        let component=findByTestAttr(wrapper,'header');
        expect(component.length).toBe(1);
    })
    
    it('Should render Desc',()=>{
        let component=findByTestAttr(wrapper,'desc');
        expect(component.length).toBe(1);
    })


  });
  describe("Have No Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Should not render',()=>{
        let component=findByTestAttr(wrapper,'HeadlineComponent');
        expect(component.length).toBe(0);
    })
    

  });
});
