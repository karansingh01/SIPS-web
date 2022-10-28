"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumDrinksQuery = void 0;
const client_1 = require("@apollo/client");
exports.RumDrinksQuery = (0, client_1.gql) `
 query RumDrinks {
  rumDrinks @rest (type: "drinks", path: "filter.php?i=Rum"){ 
    drinks
  }}
`;
