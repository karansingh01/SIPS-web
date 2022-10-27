"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const Header_1 = __importDefault(require("../components/Header"));
const SearchBar_1 = __importDefault(require("../components/SearchBar"));
const react_3 = require("react");
const DummyData_1 = __importDefault(require("../DummyData"));
const CocktailCardsDisplay_1 = __importDefault(require("../components/CocktailCardsDisplay"));
/**
 * search filter method
 * @param cocktails all cocktails
 * @param query string entered in search field
 * @returns all cocktails containing the search param
 */
const filterCocktails = (cocktails, query) => {
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
const AllCocktailsPage = () => {
    const [query, setQuery] = (0, react_3.useState)("");
    const cocktails = DummyData_1.default;
    const filteredCocktails = filterCocktails(cocktails, query);
    return (<react_2.Flex flexDirection="column">
      <Header_1.default />
      <react_2.Grid transform="translate(0px, -150px)" margin={"30px"} rounded={20} templateRows="repeat(1fr)" templateColumns="repeat(1fr)" gap={4} mt={5}>
        <react_2.GridItem colSpan={4}>
          <SearchBar_1.default q={query} setQuery={setQuery}/>
        </react_2.GridItem>
        <react_2.GridItem colSpan={4}>
          <CocktailCardsDisplay_1.default cocktails={filteredCocktails}/>
        </react_2.GridItem>
      </react_2.Grid>
    </react_2.Flex>);
};
exports.default = AllCocktailsPage;
