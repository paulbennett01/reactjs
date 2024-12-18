import React from "react";
import   { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/Count">Count</Link>
                </li>
                <li>
                  <Link to="/RandomJoke">Random Joke</Link>
                </li>
                <li>
                  <Link to="/PokemonCatcher">Pokemon Catcher</Link>
                </li>
                <li>
                        <Link to="/games">Games</Link>
                    </li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation;