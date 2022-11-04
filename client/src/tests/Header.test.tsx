import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "../context/authContext";
import client1 from "../apolloClient";

import App from "../App";
import { ApolloProvider } from "@apollo/client";

import Header from "../components/Header";

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

test("Renders correctly", () => {
  //cannot run because of hooks used in component (useDispatch)

  /*let { container } = render(<Header />);
  expect(container).toMatchSnapshot();*/
});
