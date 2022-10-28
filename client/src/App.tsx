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
  console.log("vodka drink: ", response.data.vodkaDrinks.drinks[1].strDrink);
});
client.query({ query: GinDrinksQuery }).then((response) => {
  console.log("gin drink: ", response.data.ginDrinks.drinks[1].strDrink);
});
client.query({ query: RumDrinksQuery }).then((response) => {
  console.log("rum drink: ", response.data.rumDrinks.drinks[1].strDrink);
});
client.query({ query: TequilaDrinksQuery }).then((response) => {
  console.log(
    "tequila drink: ",
    response.data.tequilaDrinks.drinks[1].strDrink
  );
});
let alc: String = "Vodka";
client.query({ query: alcoholFilterParam(alc) }).then((response) => {
  console.log(
    "vodka drink by filter: ",
    response.data.alcoholFilter.drinks /*.drinks[1]  .strDrink */
  );
});

/**
 * Try fetch drinks by alcohol (in same file):
 */
/* export const DrinkByAlc = (ingredient: String) => {
  const { loading, error, data } = useQuery(AlcoholFilterQuery, {
    variables: { alcohol: ingredient },
  });
  if (loading) return console.log("loading..");
  if (error) return console.log("error");
  return data?.drinks[0].strDrink;
}; */
/* client.query({ query: AlcoholFilterQuery }).then((response) => {
  console.log(
    "alcohol filter: ",
    response.data.alcoholFilter.drinks[0].strDrink
  );
}); */

/* console.log(DrinkByAlc("Gin")); */

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
