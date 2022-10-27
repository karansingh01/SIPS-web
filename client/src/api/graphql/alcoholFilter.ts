import { gql, useQuery } from '@apollo/client';

// path is the endpoint, maybe add .php
// strIngredient1 is the first ingredient, strIngredient2 is the second ingredient, etc
// we are currently only fetching drinks, which is the parent of all the atrributes. 
// There are a max of 15 ingredients,
// where those that are not used are "null". We probably need to fetch these later though...

/**
 * 
export const AlcoholFilterQuery = gql`
 query AlcoholFilter($alcohol : string!) {
  alcoholFilter(alcohol : $alcohol) @rest(type: "drinks", path: "filter.php?i={$alcohol}"){ 
    drinks
  }}
`;
 */

export const AlcoholFilterQuery = gql`
 query AlcoholFilter {
  alcoholFilter @rest (type: "drinks", path: "filter.php?i=Vodka"){ 
    drinks
  }}
`;


export const DrinkByAlc = ( alcohol : String/* {alcohol} : {alcohol : String}  */) => {
    const { loading, error, data } = useQuery(AlcoholFilterQuery, {
        variables: { alcohol }
    })
    if (error) {
        return console.log("error");
    }
    return console.log(data?.drinks)
}