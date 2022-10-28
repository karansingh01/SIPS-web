import { gql, useQuery } from '@apollo/client';

export const GinDrinksQuery = gql`
 query GinDrinks {
  ginDrinks @rest (type: "drinks", path: "filter.php?i=Gin"){ 
    drinks
  }}
`;
