"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const client_1 = require("./api/client");
const randomDrink_1 = require("./api/graphql/randomDrink");
const alcoholFilter_1 = require("./api/graphql/alcoholFilter"); //klager på i konsollen
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("@chakra-ui/react");
const AllCocktailsPage_1 = __importDefault(require("./pages/AllCocktailsPage"));
const CocktailRecipePage_1 = __importDefault(require("./pages/CocktailRecipePage"));
const FavoriteCocktailsPage_1 = __importDefault(require("./pages/FavoriteCocktailsPage"));
// format: response.data.<queryName>.drinks[0].<whateverYouWantToCollect>
// drinks[0] gives you the first drink in the array, which is the only drink since we
// are only querying for one random drink.
client_1.client.query({ query: randomDrink_1.RandomDrinkQuery }).then((response) => {
    console.log(response.data.randomDrink.drinks[0].strDrink);
});
client_1.client.query({ query: alcoholFilter_1.AlcoholFilterQuery }).then((response) => {
    console.log(response.data.alcoholFilter.drinks[0].strDrink);
});
(0, alcoholFilter_1.DrinkByAlc)("Vodka");
function App() {
    return (<react_1.ChakraProvider>
      <react_router_dom_1.HashRouter>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<AllCocktailsPage_1.default />}/>
          <react_router_dom_1.Route path="/cr" element={<CocktailRecipePage_1.default />}/>
          <react_router_dom_1.Route path="/fav" element={<FavoriteCocktailsPage_1.default />}/>
        </react_router_dom_1.Routes>
      </react_router_dom_1.HashRouter>
    </react_1.ChakraProvider>
    /*       <DisplayLocations />
     */
    );
}
exports.default = App;
