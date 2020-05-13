import React from 'react'

/*function TestJSXAndJS(){
    return <div><h1>Hi Madhu</h1></div;
}
*/

function TestJSXAndJS(props){
 return React.createElement('div',{id:'hello',className:'DummyClass'},
    React.createElement('h1',null,'Hi Madhu')
 )

}
export default TestJSXAndJS;

