import React, { useState} from "react";
const pokemons = ["Pikachu", "Charmander", "Squirtle", "Bulbasaur", "Jigglypuff"];

const PokemonCatcher = () => {
    const [caughtPokemon, setCaughtPokemon] = useState([]);
    const [lastCaught, setLastCaught] = useState(""); 
    const catchPokemon = () => {
        const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
        setCaughtPokemon([...caughtPokemon, randomPokemon]);
        setLastCaught(randomPokemon);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Pokemon Catcher</h1>
            <button onClick={catchPokemon} style={{backgroundColor: "yellow", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontSize: "18px", }}>Catch a pokemon</button>
            <h2>{lastCaught ? `You caught a ${lastCaught}! `: "Catch Your first pokemon"}</h2>
            <h3>Total Pokemon Caught: {caughtPokemon.length} </h3>
            <ul> {caughtPokemon.map((pokemon, index) => (
                <li key={index}>{pokemon}</li> ))}
            
                </ul>
        </div>
    );
}
    export default PokemonCatcher;