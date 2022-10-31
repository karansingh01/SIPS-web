import './App.css';

import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { client } from './api/client';
import { GinDrinksQuery } from './api/graphql/ginDrinks';
import { RandomDrinkQuery } from './api/graphql/randomDrink';
import { RumDrinksQuery } from './api/graphql/rumDrinks';
import { TequilaDrinksQuery } from './api/graphql/tequilaDrinks';
import { VodkaDrinksQuery } from './api/graphql/vodkaDrinks';
import client1 from './apolloClient';
import { AuthProvider } from './context/authContext';
import AllCocktailsPage from './pages/AllCocktailsPage';
import CocktailRecipePage from './pages/CocktailRecipePage';
import CocktailDetails from './components/CocktailRecipe/AllCocktailRecipes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import reportWebVitals from './reportWebVitals';

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

console.log("reportwebVitals: ", reportWebVitals);

export default function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <ApolloProvider client={client1}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<AllCocktailsPage />} />
              <Route path="/cr" element={<CocktailRecipePage />} />
              <Route path="/oneCocktail" element={<CocktailDetails/>} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </HashRouter>
        </ApolloProvider>
      </ChakraProvider>
    </AuthProvider>
    /*       <DisplayLocations />
     */
  );
}
