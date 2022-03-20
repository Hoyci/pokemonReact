import { 
  HashRouter as Router,
  Routes, 
  Route
} from "react-router-dom"
import { GlobalStyles } from "./GlobalStyles";
import Navbar from "./components/NavBar/NavBar"
import Home from "./routes/Home"
import Pokedex from "./routes/Pokedex"

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />

      <Routes>
        <Route path="/#/pokemonReact/" element={<Home />} />
        <Route path="/#/pokemonReact/pokedex/:pageNumber" element={<Pokedex />} />
      </Routes>
    </Router>
  );
}

export default App;
