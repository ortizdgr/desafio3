import './App.css'
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import PokemonPage from "./views/PokemonPage";
import PokemonCard from "./views/PokemonCard";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/pokemones"
          element={<PokemonPage />}
        />
        <Route path="/pokemon/:name"
        element={<PokemonCard />} />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer/>
    </div>
  );
};
export default App