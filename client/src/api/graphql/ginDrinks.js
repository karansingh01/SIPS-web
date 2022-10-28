"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GinDrinksQuery = void 0;
const client_1 = require("@apollo/client");
exports.GinDrinksQuery = (0, client_1.gql) `
 query GinDrinks {
  ginDrinks @rest (type: "drinks", path: "filter.php?i=Gin"){ 
    drinks
  }}
`;
