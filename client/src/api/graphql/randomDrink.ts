import { gql } from '@apollo/client';

// path is the endpoint, maybe add .php
// strIngredient1 is the first ingredient, strIngredient2 is the second ingredient, etc
// we are currently only fetching drinks, which is the parent of all the atrributes. 
// There are a max of 15 ingredients,
// where those that are not used are "null". We probably need to fetch these later though...

export const RandomDrinkQuery = gql`
 query RandomDrink {
  randomDrink @rest(type: "drinks", path: "random.php"){ 
    drinks {
      strDrink: String!
            strCategory: String!
            strAlcoholic: String!
            strGlass: String
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
            strIngredient11: String
            strIngredient12: String
            strIngredient13: String
            strIngredient14: String
            strIngredient15: String
    }
  }}
`;
