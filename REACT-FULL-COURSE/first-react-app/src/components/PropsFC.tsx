import React from 'react';

export const PropsFC=(props:any)=>{
return <h1>name {props.name} and {props.age}
          <h2>{props.children}</h2>
       </h1>;   
}