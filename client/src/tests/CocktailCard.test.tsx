import React from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { MockedProvider } from "@apollo/client/testing";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/authContext";
import client1 from "../apolloClient";
import AllCocktailsPage from "../pages/AllCocktailsPage";
import App from "../App";
import { ApolloProvider } from "@apollo/client";
import CocktailCard from "../components/CocktailCard";
import { testDrink } from "./test-utils";

beforeEach(() => {
  render(
    <AuthProvider>
      <ChakraProvider>
        <ApolloProvider client={client1}>
          <App />
        </ApolloProvider>
      </ChakraProvider>
    </AuthProvider>
  );
});

test("Snapshot test of CocktailCard", async () => {
  const el = render(<CocktailCard cocktail={testDrink} />);
  /* const el1 = el.findAllByText(""); */
  expect(await el).toMatchSnapshot();
});
