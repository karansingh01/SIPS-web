"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrinkByAlc = exports.AlcoholFilterQuery = void 0;
const client_1 = require("@apollo/client");
// path is the endpoint, maybe add .php
// strIngredient1 is the first ingredient, strIngredient2 is the second ingredient, etc
// we are currently only fetching drinks, which is the parent of all the atrributes. 
// There are a max of 15 ingredients,
// where those that are not used are "null". We probably need to fetch these later though...

/**
 * Feilmld jeg får i konsoll klager på denne og app.js:9
 */
exports.AlcoholFilterQuery = (0, client_1.gql) ` 
 query AlcoholFilter($alcohol : String!) {
  alcoholFilter @rest(type: "drinks", path: "filter.php?i=$alcohol"){ 
    drinks
/*  {
     name
   } */
  }}
`;
const DrinkByAlc = (alcohol /* {alcohol}:{alcohol : string} */) => {
    const { loading, error, data } = (0, client_1.useQuery)(exports.AlcoholFilterQuery, {
        variables: { alcohol }
    });
    return console.log(data === null || data === void 0 ? void 0 : data.drinks);
};
exports.DrinkByAlc = DrinkByAlc;
