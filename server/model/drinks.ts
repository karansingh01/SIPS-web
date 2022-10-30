const { gql } = require('apollo-server');

export const RandomDrinkQuery = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }


  "All drinks"
  type drinks {
    idDrink: ID!
    strDrink: String!
    strDrinkThumb: String!
}

type oneDrink{
        idDrink: String!{
            strDrink: String!
            strCategory": String!
            strAlcoholic": String!
            strGlass": String
            strInstructions: String
            strIngredient1: String!
            strIngredient2: String
            strIngredient3: String
            strIngredient4: String
            strIngredient5: String
            strIngredient6: String
            strIngredient7: String
            strIngredient8: String
            strIngredient9: String
            strIngredient10: String
            }
        }

`;

