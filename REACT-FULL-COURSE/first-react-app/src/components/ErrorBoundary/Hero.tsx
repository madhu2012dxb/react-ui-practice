import React from 'react'

function Hero(props:any) {
    if(props.heroName === 'Joker'){
         throw new Error("Something wenr wrong!!!");
    }
    return (
        <div>
            <h1>Hero Name:{props.heroName}</h1>
        </div>
    )
}

export default Hero;
