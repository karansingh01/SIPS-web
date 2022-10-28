import "./App.css";
import { client } from "./api/client";
import { alcoholFilterParam } from "./api/graphql/alcoholFilter";
import { RandomDrinkQuery } from "./api/graphql/randomDrink";
import { VodkaDrinksQuery } from "./api/graphql/vodkaDrinks";
import { GinDrinksQuery } from "./api/graphql/ginDrinks";
import { RumDrinksQuery } from "./api/graphql/rumDrinks";
import { TequilaDrinksQuery } from "./api/graphql/tequilaDrinks";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AllCocktailsPage from "./pages/AllCocktailsPage";
import CocktailRecipePage from "./pages/CocktailRecipePage";
import FavoriteCocktailsPage from "./pages/FavoriteCocktailsPage";
import { gql, useQuery } from "@apollo/client";

// format: response.data.<queryName>.drinks[0].<whateverYouWantToCollect>
// drinks[0] gives you the first drink in the array, which is the only drink since we
// are only querying for one random drink.
client.query({ query: RandomDrinkQuery }).then((response) => {
  console.log("random drink: ", response.data.randomDrink.drinks[0].strDrink);
});

/**
 * Fetch drinks by alcohol (in different files):
 */

client.query({ query: VodkaDrinksQuery }).then((response) => {
  console.log(
    "first vodka drink: ",
    response.data.vodkaDrinks.drinks[0].strDrink
  );
});
client.query({ query: GinDrinksQuery }).then((response) => {
  console.log("first gin drink: ", response.data.ginDrinks.drinks[0].strDrink);
});
client.query({ query: RumDrinksQuery }).then((response) => {
  console.log("first rum drink: ", response.data.rumDrinks.drinks[0].strDrink);
});
client.query({ query: TequilaDrinksQuery }).then((response) => {
  console.log(
    "first tequila drink: ",
    response.data.tequilaDrinks.drinks[0].strDrink
  );
});
/* let alc: String = "Vodka";
client.query({ query: alcoholFilterParam(alc) }).then((response) => {
  console.log("vodka drink by filter: ", response.data.alcoholFilter.drinks);
});
 */

export default function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AllCocktailsPage />} />
          <Route path="/cr" element={<CocktailRecipePage />} />
          <Route path="/fav" element={<FavoriteCocktailsPage />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
    /*       <DisplayLocations />
     */
  );
}
