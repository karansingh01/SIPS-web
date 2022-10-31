import { gql, useQuery } from '@apollo/client';

export const RumDrinksQuery = gql`
 query RumDrinks {
  rumDrinks @rest (type: "drinks", path: "filter.php?i=Rum"){ 
    drinks
  }}
`;
