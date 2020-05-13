import React from 'react'
import {checkProps,findByTestAttr} from './../../../Utils'
import SharedButton from './index'
import {shallow} from 'enzyme'

describe('SharedButton Component',()=>{

    describe('Check Prop Types',()=>{
    it('Should Not throw a warning',()=>{
            const expectedProps={
                buttonText:'Test Text Button',
                emitEvent:()=>{
                    console.log('test event')
                }
            }
            const propsErr=checkProps(SharedButton,expectedProps);
            expect(propsErr).toBeUndefined()
   
       }) 
    })

    describe('Renders',()=>{
       let wrapper;
       let mockFunc;
       beforeEach(()=>{
           mockFunc=jest.fn();
           const props={
            buttonText:'Test Text Button',
            emitEvent:mockFunc
           }
           wrapper=shallow(<SharedButton {...props}/>);
       })

       it('Should render a button',()=>{
           const button=findByTestAttr(wrapper,'buttonComponent')
           expect(button.length).toBe(1);
       })
       it('Should emit call back on click',()=>{
        const button=findByTestAttr(wrapper,'buttonComponent');
        button.simulate('click');
        const callback=mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    })

    })
    


})