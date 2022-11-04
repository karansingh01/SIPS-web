import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { MockedProvider } from "@apollo/client/testing";
import { AuthProvider } from "../context/authContext";
import App from "../App";

interface TestProps {
  children: any;
  gqlMocks?: any;
  url: string;
  params?: any;
}

export const TestProvider = ({
  children,
  gqlMocks = [],
  url,
  params = {},
}: TestProps) => {
  return (
    <AuthProvider>
      <MockedProvider mocks={gqlMocks}>
        <ChakraProvider>
          <HashRouter>
            <Route path={url}>{children}</Route>
          </HashRouter>
        </ChakraProvider>
      </MockedProvider>
    </AuthProvider>
  );
};
