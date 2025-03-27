import BeersList from "./components/BeerList";
import AvailableBeers from "./components/AvailableBeers";
import BeerCount from "./components/BeerCount";
import BeerStyles from "./components/BeerStyles";
import beers from "./data/beers";

const App = () => {
  return (
    <div>
      <h1>🍺 Cervezas 🍺</h1>
      <BeersList beers={beers} />
      <AvailableBeers beers={beers} />
      <BeerCount beers={beers} />
      <BeerStyles beers={beers} />
    </div>
  );
};

export default App;
