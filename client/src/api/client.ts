import {ApolloClient, InMemoryCache} from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

// Set rest-link endpoint
const restLink = new RestLink(
    { uri: 'https://www.thecocktaildb.com/api/json/v1/1/' }
);

// Create apollo client
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink,
});


