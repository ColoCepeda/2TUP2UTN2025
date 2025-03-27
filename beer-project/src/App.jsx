import BeersList from "./components/BeerList";
import AvailableBeers from "./components/AvailableBeers";
import BeerCount from "./components/BeerCount";
import BeerStyles from "./components/BeerStyles";
import beers from "./data/beers";

const exchangeRate = 1200;

const App = () => {
  return (
    <div>
      <h1>🍺 Cervezas 🍺</h1>
      <BeersList beers={beers} exchangeRate={exchangeRate} />
      <AvailableBeers beers={beers} exchangeRate={exchangeRate} />
      <BeerCount beers={beers} />
      <BeerStyles beers={beers} />
    </div>
  );
};

export default App;
