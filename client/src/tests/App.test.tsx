import React from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { MockedProvider } from "@apollo/client/testing";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/authContext";
import client1 from "../apolloClient";
import App from "../App";

test("Snapshot test checks that the same pokemons get rendered every time", async () => {
  const { queryAllByRole, baseElement } = render(
    <AuthProvider>
      <ChakraProvider>
        <MockedProvider>
          {/*  <HashRouter> */}
          <App />
          {/* </HashRouter> */}
        </MockedProvider>
      </ChakraProvider>
    </AuthProvider>
  );

  expect(baseElement.innerHTML).toMatchSnapshot();
});
