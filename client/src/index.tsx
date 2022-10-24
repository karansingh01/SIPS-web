import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, ApolloLink } from '@apollo/client';
import { JsonApiLink } from "apollo-link-json-api";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  uri: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink',
  cache: new InMemoryCache()
});
/* const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache()
}); */

/* const client = new ApolloClient({
  uri: 'https://localhost4000',   // her må iv hente API?
  cache: new InMemoryCache(),
});
 */
/* client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result)); */

  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );
