"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alcoholFilterParam = void 0;
const client_1 = require("@apollo/client");
// path is the endpoint, maybe add .php
// strIngredient1 is the first ingredient, strIngredient2 is the second ingredient, etc
// we are currently only fetching drinks, which is the parent of all the atrributes. 
// There are a max of 15 ingredients,
// where those that are not used are "null". We probably need to fetch these later though...
function alcoholFilterParam(alcohol) {
    const AlcoholFilterQuery = (0, client_1.gql) `
    query AlcoholFilter($alcohol : String!) {
    alcoholFilter(alcohol : $alcohol) @rest(type: "drinks", path: "filter.php?i=${alcohol}"){ 
        drinks
    }}
    `;
    return AlcoholFilterQuery;
}
exports.alcoholFilterParam = alcoholFilterParam;
/*
export const AlcoholFilterQuery = gql`
 query AlcoholFilter($alcohol : String!) {
  alcoholFilter(alcohol : $alcohol) @rest(type: "drinks", path: "filter.php?i=$alcohol"){
    drinks
  }}
`;

export function DrinkByAlc( ingredient : String)  {
    const { loading, error, data } = useQuery(AlcoholFilterQuery, {
        variables: { alcohol: ingredient}
    })
    if (loading) return console.log("loading..");
    if (error) return console.log("error");
     return data?.drinks[0].strDrink;
} */ 
