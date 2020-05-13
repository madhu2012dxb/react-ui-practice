import React,{useState} from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponent() {
    const [age,setAge]=useState(25);
    const [salary,setSalary]=useState(40000);
    const incrementAge=()=>{
        setAge(age+1);
    }
    const incrementSalary=()=>{
        setSalary(salary+10000);
    }
    return (
        <div>
            <Title/>
            <Count text={age} count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text={salary} count={salary}/>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
