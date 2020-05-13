import React from 'react';

const FunctionalCClick = () => {
    function clickHandler(){
        console.log('Button Clicked');
    }
    //not <button onClick={clickHandler()} >Button</button>
    return (
        <div>
            <button onClick={clickHandler} >Button</button>
        </div>
    );
};

export default FunctionalCClick;