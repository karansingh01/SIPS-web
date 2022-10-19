import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log("he eehe");

const client = new ApolloClient({
  uri: 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',   // her må iv hente API?
  cache: new InMemoryCache(),  
});
console.log(client);

/* 
client
  .query({
    query: gql`
      query getDrinks {
        idDrink: 11007{
          strDrink
        }
      }
    `,
  })
  .then((result) => console.log(result + "asdfghjkjhgf"));

  console.log(client.link);
 */


  root.render(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>,
  );
