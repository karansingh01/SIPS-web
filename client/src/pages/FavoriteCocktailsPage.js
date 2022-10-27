"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const bs_1 = require("react-icons/bs");
const SearchBar_1 = __importDefault(require("../components/SearchBar"));
const react_3 = require("react");
const DummyData_1 = __importDefault(require("../DummyData"));
const CocktailCardsDisplay_1 = __importDefault(require("../components/CocktailCardsDisplay"));
const Navbar_1 = __importDefault(require("../components/Navbar/Navbar"));
const react_router_dom_1 = require("react-router-dom");
require("./Pages.css");
/**
 * Search method
 * @param cocktails favorite cocktails
 * @param query the query parameter
 * @returns favorite cocktails containing the search param
 */
const filterFavCocktails = (cocktails, query) => {
    if (query === "") {
        return cocktails;
    }
    else {
        const filtered = cocktails.filter((cocktail) => {
            return Object.values(cocktail.name)
                .join("")
                .toLowerCase()
                .includes(query.toLowerCase());
        });
        return filtered;
    }
};
const FavoriteCocktailsPage = () => {
    /**
     * Filtrerer ut alle favoritter
     */
    const favoriteCocktails = DummyData_1.default.filter((cocktail) => cocktail.favorite);
    const [query, setQuery] = (0, react_3.useState)("");
    const filteredFavCocktails = filterFavCocktails(favoriteCocktails, query);
    return (<div className="lol">
      <Navbar_1.default />
      <react_2.HStack marginLeft={"3"} marginTop={"30px"} marginBottom={"20px"} marginRight={"75px"}>
        <react_router_dom_1.Link to="/">
          <bs_1.BsArrowLeft size={60} color={"beige"}/>
        </react_router_dom_1.Link>
        <react_2.Spacer />
        <react_2.Heading color={"beige"} fontSize={"40px"}>
          My favorite drinks
        </react_2.Heading>
        <react_2.Spacer />
      </react_2.HStack>
      <react_2.Flex flexDirection="column">
        <react_2.Grid margin={"30px"} rounded={20} templateRows="repeat(1fr)" templateColumns="repeat(1fr)" gap={4} mt={5}>
          <react_2.GridItem colSpan={4}>
            <SearchBar_1.default q={query} setQuery={setQuery}/>
          </react_2.GridItem>
          <react_2.GridItem colSpan={4}>
            <CocktailCardsDisplay_1.default cocktails={filteredFavCocktails}/>
          </react_2.GridItem>
        </react_2.Grid>
      </react_2.Flex>
    </div>);
};
exports.default = FavoriteCocktailsPage;
