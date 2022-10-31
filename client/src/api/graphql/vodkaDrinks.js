"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VodkaDrinksQuery = void 0;
const client_1 = require("@apollo/client");
exports.VodkaDrinksQuery = (0, client_1.gql) `
 query VodkaDrinks {
  vodkaDrinks @rest (type: "drinks", path: "filter.php?i=Vodka"){ 
    drinks {
        idDrink 
        strDrink
        strDrinkThumb
    }
  }}
`;
