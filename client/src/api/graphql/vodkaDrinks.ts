import { gql, useQuery } from '@apollo/client';

export const VodkaDrinksQuery = gql`
 query VodkaDrinks {
  vodkaDrinks @rest (type: "drinks", path: "filter.php?i=Vodka"){ 
    drinks {
        idDrink 
        strDrink
        strDrinkThumb
    }
  }}
`;
