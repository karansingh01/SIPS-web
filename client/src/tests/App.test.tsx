import React from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { MockedProvider } from "@apollo/client/testing";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/authContext";
import client1 from "../apolloClient";
import App from "../App";
import { ApolloProvider } from "@apollo/client";

test("Snapshot test of initial front page", async () => {
  const baseElement = render(
    <AuthProvider>
      <ChakraProvider>
        <ApolloProvider client={client1}>
          <App />
        </ApolloProvider>
      </ChakraProvider>
    </AuthProvider>
  );

  expect(await baseElement).toMatchSnapshot();
});
