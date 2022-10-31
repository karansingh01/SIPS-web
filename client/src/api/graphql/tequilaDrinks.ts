import { gql, useQuery } from '@apollo/client';

export const TequilaDrinksQuery = gql`
 query TequilaDrinks {
  tequilaDrinks @rest (type: "drinks", path: "filter.php?i=Tequila"){ 
    drinks
  }}
`;
