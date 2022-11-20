import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AllCocktailsPage from "./pages/AllCocktailsPage";
import CocktailRecipePage from "./pages/CocktailRecipePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./context/authContext";
import client1 from "./apolloClient";
import './App.css';
import VodkaPage from './pages/VodkaPage';
import GinPage from './pages/GinPage';
import RumPage from './pages/RumPage';
import LiqueurPage from './pages/LiqueurPage';


/**
 * Fetch drinks by alcohol (in different files):
 */


export default function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <ApolloProvider client={client1}>
          <HashRouter>
            <Routes>
              {`Det ser ut til at de fleste av rutene deres rendrer det samme innholdet så her kunne man gjerne ryddet opp litt. Dere kan enkelt hente ut query params fra URL ved å bruke router pakken, se her f.eks. https://v5.reactrouter.com/web/example/query-parameters`}
              <Route path="/" element={<AllCocktailsPage />} />
              <Route path="/cr" element={<CocktailRecipePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
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
  );
}
