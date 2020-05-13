import React from 'react';
import {shallow} from 'enzyme'
import {checkProps,findByTestAttr} from './../../../Utils'
import ListItem from './index'

describe('ListItem Component',()=>{

    describe('Checking PropTypes',()=>{
       it('Should Not throw a warning',()=>{
           const expectedProps={
               title:'Example Title',
               desc:'Example Desc'
           }
           const propsError=checkProps(ListItem,expectedProps);
           expect(propsError).toBeUndefined();
       })

    })
    
    describe('Component Renders',()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                title:'test Tile',
                desc:'test Desc'
            }
            wrapper=shallow(<ListItem {...props}/>)
        })
        it('Should renders without errors',()=>{
           const component=findByTestAttr(wrapper,'listItemComponent')
           expect(component.length).toBe(1)
        })

        it('Should renders a title',()=>{
            const component=findByTestAttr(wrapper,'titleComponent')
            expect(component.length).toBe(1)
         })

         it('Should renders a desc',()=>{
            const component=findByTestAttr(wrapper,'descComponent')
            expect(component.length).toBe(1)
         })

    })

    describe('Should not Render',()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                desc:'test Desc'
            }
            wrapper=shallow(<ListItem {...props}/>)
        })

       it('Component is not rendred',()=>{
           const component=findByTestAttr(wrapper,'listItemComponent');
           expect(component.length).toBe(0)
       })

    })

})
