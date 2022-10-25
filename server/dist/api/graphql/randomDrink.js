"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomDrinkQuery = void 0;
const client_1 = require("@apollo/client");
// path is the endpoint, maybe add .php
// strIngredient1 is the first ingredient, strIngredient2 is the second ingredient, etc
// we are currently only fetching 1 ingredient, there are a max of 15 ingredients,
// where those that are not used are "null". We do need to fetch these later though...
exports.randomDrinkQuery = (0, client_1.gql) `
 query RandomDrink {
  randomDrink @rest(type: "RandomDrink", path: "random"){ 
   idDrink,
   strDrink,
   strAlcoholic,
   strInstructions,
   strIngredient1
#    whatever other fields we need {
#      name
#    }
  }}
`;
