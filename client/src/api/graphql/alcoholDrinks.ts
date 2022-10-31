import { gql } from '@apollo/client';

// path is the endpoint, maybe add .php
// strIngredient1 is the first ingredient, strIngredient2 is the second ingredient, etc
// we are currently only fetching drinks, which is the parent of all the atrributes. 
// There are a max of 15 ingredients,
// where those that are not used are "null". We probably need to fetch these later though...

export const AlcoholDrinkQuery = gql`
 query Alcohol {
  Alcohol @rest(type: "drinks", path: "filter.php?a=Alcoholic"){ 
    drinks {
      strDrink
      idDrink
      strDrinkThumb
    }
  }}
`;