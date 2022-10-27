import "./App.css";
import { client } from "./api/client";
import { DrinkByAlc, AlcoholFilterQuery } from "./api/graphql/alcoholFilter";
import { RandomDrinkQuery } from "./api/graphql/randomDrink";
import { VodkaDrinksQuery } from "./api/graphql/vodkaDrinks";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AllCocktailsPage from "./pages/AllCocktailsPage";
import CocktailRecipePage from "./pages/CocktailRecipePage";
import FavoriteCocktailsPage from "./pages/FavoriteCocktailsPage";

// format: response.data.<queryName>.drinks[0].<whateverYouWantToCollect>
// drinks[0] gives you the first drink in the array, which is the only drink since we
// are only querying for one random drink.
client.query({ query: RandomDrinkQuery }).then((response) => {
  console.log("random drink: ", response.data.randomDrink.drinks[0].strDrink);
});

client.query({ query: VodkaDrinksQuery }).then((response) => {
  console.log("vodka drink: ", response.data.vodkaDrinks.drinks[1].strDrink);
});

/* client.query({ query: AlcoholFilterQuery }).then((response) => {
  console.log(
    "alcohol filter: ",
    response.data.alcoholFilter.drinks[0].strDrink
  );
}); */
/* 
let alc: String = "Vodka";
DrinkByAlc(alc); */
console.log(DrinkByAlc("Gin"));

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
