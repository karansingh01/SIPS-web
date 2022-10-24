import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const client = new ApolloClient({
  uri: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka',   // her må iv hente API?
  cache: new InMemoryCache(),  
});
console.log(client);

/* const query = gql`
  query Luke {
    person @rest(
      type: "Drink", 
      path: "people/1/") {
      name
    }
  }
`;

client.query({ query }).then(response => {
  console.log(response.data.person.name);
});
 */
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
