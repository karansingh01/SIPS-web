import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";
import AllCocktailsPage from "./pages/AllCocktailsPage";
import CocktailRecipePage from "./pages/CocktailRecipePage";
import FavoriteCocktailsPage from "./pages/FavoriteCocktailsPage";
import "./App.css";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

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
