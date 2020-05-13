import React, { Component } from 'react';
import Person from './Person';

class ListComponent extends Component<any,any> {
        persons=[ {id:1,name:'Madhu1',age:31},
        {id:2,name:'Madhu2',age:32},
        {id:3,name:'Madhu3',age:33},
        {id:4,name:'Madhu4',age:34}
        ];

    render() {
        /*const persons=[ {id:1,name:'Madhu1',age:31},
        {id:2,name:'Madhu2',age:32},
        {id:3,name:'Madhu3',age:33},
        {id:4,name:'Madhu4',age:34}
        ];
        */
        const namesArray=["madhu1","madhu2","madhu3"];
        /*const namesList=namesArray.map(name=>(
        <h2 key={name}>{name}</h2>
        ));
        */
        /*const namesList=namesArray.map((name,index)=>{
        return <h2 key={index}>{name}</h2>
        });
        */
        // {return x } equals to (x) 
        const namesList=namesArray.map((name,index)=>(
           <h2 key={index}>{name}</h2>
          ));

        const personsList=this.persons.map(p => (
            <h1> this is <Person key={p.id} person={p}/></h1>
        ));
        return (
            <div>
               {/* {personsList} */}
               {namesList}
            </div>
        );
    }
}

export default ListComponent;