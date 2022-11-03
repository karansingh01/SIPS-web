import "./App.css";
import { client } from "./api/client";
import { alcoholFilterParam } from "./api/graphql/alcoholFilter";
import { RandomDrinkQuery } from "./api/graphql/randomDrink";
import { VodkaDrinksQuery } from "./api/graphql/vodkaDrinks";
import { GinDrinksQuery } from "./api/graphql/ginDrinks";
import { RumDrinksQuery } from "./api/graphql/rumDrinks";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AllCocktailsPage from "./pages/AllCocktailsPage";
import CocktailRecipePage from "./pages/CocktailRecipePage";
import { gql, useQuery } from "@apollo/client";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./context/authContext";
import client1 from "./apolloClient";
import TestPage from "./pages/TestPage";
import './App.css';
import VodkaPage from './pages/VodkaPage';
import GinPage from './pages/GinPage';
import RumPage from './pages/RumPage';
import LiqueurPage from './pages/LiqueurPage';


// format: response.data.<queryName>.drinks[0].<whateverYouWantToCollect>
// drinks[0] gives you the first drink in the array, which is the only drink since we
// are only querying for one random drink.

/**
 * Fetch drinks by alcohol (in different files):
 */

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
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/Vodka" element={<VodkaPage />} />
              <Route path="/Rum" element={<RumPage />} />
              <Route path="/Gin" element={<GinPage />} />
              <Route path="/Liqueur" element={<LiqueurPage />} />
              <Route path="/All" element={<AllCocktailsPage />} />
            </Routes>
          </HashRouter>
        </ApolloProvider>
      </ChakraProvider>
    </AuthProvider>
    /*       <DisplayLocations />
     */
  );
}
