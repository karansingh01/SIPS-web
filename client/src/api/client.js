"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const client_1 = require("@apollo/client");
const apollo_link_rest_1 = require("apollo-link-rest");
// Set rest-link endpoint
const restLink = new apollo_link_rest_1.RestLink({ uri: 'https://www.thecocktaildb.com/api/json/v1/1/' });
// Create apollo client
exports.client = new client_1.ApolloClient({
    cache: new client_1.InMemoryCache(),
    link: restLink,
});
