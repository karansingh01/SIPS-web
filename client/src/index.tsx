import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',   // her må iv hente API?
  cache: new InMemoryCache(),
});

client
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
  .then((result) => console.log(result));

  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );


