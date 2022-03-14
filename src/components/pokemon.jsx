import React, { useEffect, useState } from 'react';


let Pokemon = (props) =>{
let [pokemonList,setpokemonList] = useState([])


let getPokemonFromAPI = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5000")
    .then(response => {
        return response.json();
  }).then(response => {
        console.log(response);
        setpokemonList(response.results)
  }).catch(err=>{
        console.log("error 404... no API found." + err);
  });
}
return<>
<h1>Pokemon API</h1>
<button className='btn btn-info' onClick={getPokemonFromAPI}>Fetch Pokemon</button>
<ul>
    {pokemonList.map((pokemonObj,index ) =>{
        return <div key={index}>
        <li>{pokemonObj.name}</li>
        </div>
    })}
</ul>
</>
}
export default Pokemon