import React from 'react';

function Person(props:any){
const {name}= props.person;  
return <h1>{name}</h1>
}
export default Person;