"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlcoholFilterQuery = void 0;
const client_1 = require("@apollo/client");
// path is the endpoint, maybe add .php
// strIngredient1 is the first ingredient, strIngredient2 is the second ingredient, etc
// we are currently only fetching drinks, which is the parent of all the atrributes. 
// There are a max of 15 ingredients,
// where those that are not used are "null". We probably need to fetch these later though...
exports.AlcoholFilterQuery = (0, client_1.gql) `
 query AlcoholFilter($alcohol : string!) {
    alcoholFilter @rest(type: "drinks", path: "filter.php?i=$alcohol"){ 
    drinks
#    whatever other fields we need {
#      name
#    }
  }}
`;