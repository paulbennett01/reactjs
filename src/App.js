import React from 'react';
import   { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Count from './pages/Count';
import RandomJoke from './pages/RandomJoke';
import PokemonCatcher from './pages/PokemonCatcher';





const App = () => {
  return (
    <> 
<Router>
<header>

<Navigation />
</header>
<main>
{/* This will change depending on the content being loaded */}
<Routes>

  <Route path="/home" element={ <Home />} />
  <Route path="/count" element={ <Count />} />
  <Route path="/RandomJoke" element={ <RandomJoke />} />
  <Route path="/PokemonCatcher" element={ <PokemonCatcher />} />

</Routes>
</main>

<footer>

</footer>
</Router>
    </>
    
  );
}

export default App;
