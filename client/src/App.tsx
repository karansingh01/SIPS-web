import './App.css';
import reportWebVitals from './reportWebVitals';
import { client } from './api/client';
import { RandomDrinkQuery } from './api/graphql/randomDrink';
import { HashRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AllCocktailsPage from "./pages/AllCocktailsPage";
import CocktailRecipePage from "./pages/CocktailRecipePage";
import FavoriteCocktailsPage from "./pages/FavoriteCocktailsPage";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from './context/authContext';
import client1 from './apolloClient';

// format: response.data.<queryName>.drinks[0].<whateverYouWantToCollect>
// drinks[0] gives you the first drink in the array, which is the only drink since we
// are only querying for one random drink.
client.query({ query: RandomDrinkQuery }).then(response => {
  console.log(response.data.randomDrink.drinks[0].strDrink);
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
              <Route path="/fav" element={<FavoriteCocktailsPage />} />
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
