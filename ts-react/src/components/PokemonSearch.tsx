import React, { Component } from 'react';
import User from '../interfaces/User.interface';
import SearchState from '../interfaces/SearchState.interface';

//class PokemonSearch extends Component<{name:string; numberOfPokemons: number}> {

    //User {name} has {numberOfPokemons} pokemons
    //User {this.props.name} has {this.props.numberOfPokemons} pokemons
    //numberOfPokemons && <span>has indicate if numberOfPokemons exist

class PokemonSearch extends Component<User,SearchState> {
    pokemonRef: React.RefObject<HTMLInputElement>;
    constructor(props: User){
      super(props);
      this.state={
       name: '',
       numberOfAbilities: 0,
       baseExperience: 0,
       imageUrl: '',
       error: false
       }
      this.pokemonRef=React.createRef();
    }

    onSearchClick=()=>{
        const inputValue=this.pokemonRef.current.value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then(res =>{
         if(res.status!=200){
             this.setState({error: true});
             return;
         }
         res.json().then(data =>{
             this.setState({
                name: data.name,
                numberOfAbilities: data.abilities.length,
                baseExperience: data.base_experience,
                imageUrl: data.sprites.front_default,
                error: false
             });
         })
        }
        )
    }
    render
    () {
       const {name: userName,numberOfPokemons}= this.props;
       const{baseExperience,imageUrl,name,numberOfAbilities,error}=this.state;
       let resultMarkup;
       if(error){
        resultMarkup=<div>Pokenmon not found, Please try again</div>
       }else{
        resultMarkup=<div>
         <img src={imageUrl} alt="pokemon" className="pokemon-image"/>
         <p>
             {name} has {numberOfAbilities} abilities and {baseExperience} base experience points
         </p>
        </div>
       } 

       return (
            <div>
             <p>   
             User {name} {' '} { numberOfPokemons && <span>has {numberOfPokemons} pokemons</span>}
             </p>
             <input type="text" ref={this.pokemonRef}/>
             <button onClick={this.onSearchClick} className="my-button">
                 Search
             </button>
             ${resultMarkup}
            </div>
        );
    }
}

export default PokemonSearch;