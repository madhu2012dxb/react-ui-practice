import React, { useState,useEffect } from 'react'

function FuncCompDidMount() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

    useEffect(()=>{
    console.log('UseEffect Called');
    window.addEventListener('mousemove',logMousePosition);
    },[])

    const logMousePosition=(e:any)=>{
        setX(e.clientX);
        setY(e.clientY);
    }

    return (
        <div>
             Mouse Cooridnates X: {x} Y:{y} 
        </div>
    )
}

export default FuncCompDidMount
