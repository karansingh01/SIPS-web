
  import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';



const client = new ApolloClient({
  uri: 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',   // her må iv hente API?
  cache: new InMemoryCache(),  
});
console.log(client);




const GET_DRINKS = gql`
  query {
        drinks{
          strDrink
        }
      }
`;

export default function App() {
  const {loading, error, data} =useQuery(GET_DRINKS)

  if (loading){
    return (
      <p>Loading </p> 
    )
  }
  if (error){
    return (
      <p>There was an error </p> 
    )
  }

  return (
    <div className='App'>
      {data.drink.strDrink}
      <h2>My first Apollo app 🚀</h2>
      <h2>Console.logger fra en nettside ved bruk av apollo</h2>
      <br />

    </div>
  );
}
