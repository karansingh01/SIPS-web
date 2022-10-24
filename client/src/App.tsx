
  import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { log } from 'console';



/* const cache = new InMemoryCache();

const client2 = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  uri: 'http://localhost:4000/',
 */

const client = new ApolloClient({
  uri: 'www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka',   // her må iv hente API?
  cache: new InMemoryCache(),  
});
console.log(client);



/* 
const GET_DRINKS2 = gql`
query cocktails($ingredient: String) {
  cocktails(ingredient: $ingredient) {
    id
    name
    imageURL
  }
}
`;
const GET_DRINKS3 = gql`
query cocktail($id: ID!) {
  cocktail(id: $id) {
    id
    likes
    glassType
    instructions
  }
}
`; */


const GET_DRINKS = gql`
query {
  drinks() {
    id
  }
}
`;

console.log(GET_DRINKS);





export default function App() {
/*   const {loading, error, data} =useQuery(GET_DRINKS)
 */
/*   if (loading){
    return (
      <p>Loading </p> 
    )
  }
  if (error){
    return (
      <p>There was an error </p> 
    )
  } */

  return (
    <div className='App'>
{/*       {data}
      {data.cocktails}
      {data.cocktails.strDrink}
      {data.cocktails.name} */}

      <h2>My first Apollo app 🚀</h2>
      <h2>Console.logger fra en nettside ved bruk av apollo</h2>
      <br />

    </div>
  );
}


