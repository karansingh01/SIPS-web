import React from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { MockedProvider } from "@apollo/client/testing";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/authContext";
import client1 from "../apolloClient";
import AllCocktailsPage from "../pages/AllCocktailsPage";

test("Snapshot test of AllCocktailsPage", async () => {
  const { baseElement } = render(
    <AuthProvider>
      <ChakraProvider>
        <MockedProvider>
          <AllCocktailsPage />
        </MockedProvider>
      </ChakraProvider>
    </AuthProvider>
  );

  expect(baseElement.innerHTML).toMatchSnapshot();
});
