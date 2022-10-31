"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TequilaDrinksQuery = void 0;
const client_1 = require("@apollo/client");
exports.TequilaDrinksQuery = (0, client_1.gql) `
 query TequilaDrinks {
  tequilaDrinks @rest (type: "drinks", path: "filter.php?i=Tequila"){ 
    drinks
  }}
`;
