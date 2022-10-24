
import './App.css';
import { useQuery, gql, ApolloClient, InMemoryCache } from '@apollo/client';
/* import { JsonApiLink } from "apollo-link-json-api";


const jsonApiLink = new JsonApiLink({
  uri: 'http://jsonapiplayground.reyesoft.com/v2/',
});
// Configure the ApolloClient with the default cache and JsonApiLink
const client = new ApolloClient({
  uri: jsonApiLink,
  cache: new InMemoryCache(),
});
// A simple query to retrieve data about the first author
const query = gql`
  query firstAuthor {
    author @jsonapi(path: "authors/1") {
      name
    }
  }
  `; 
  // Invoke the query and log the person's name
client.query({ query }).then(response => {
  console.log(response.data.name);
});
*/


const GET_DRINKS = gql`
query getDrinks{
    drinks{
      idDrink
      strDrink
    }
    }
`; 
const GET_DRINKS5 = gql`
query cocktail($id: ID!) {
  cocktail(id: $id) {
    id
    likes
    glassType
    instructions
    ingredients {
      name
      quantity
    }
    liked
    bookmarked
  }
}
`; 


const GET_GEN_3 = gql`
  query g3 {
    pokemon_v2_pokemonspecies{
      name
      id
    }
  }
`;

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
`; 

export default function App() {
    const {loading, error, data} =useQuery(GET_DRINKS);
    console.log(data);
    if (data){
      return (
          <div>
        <p>data</p> 
        <h2>My first Apollo app 🚀</h2>
        <h2>Console.logger fra en nettside ved bruk av apollo</h2>
        <br />
      </div>
    );
      }
      else{
        return (
          <div>
            <p>fuck</p>
          </div>
        )
      }
}
