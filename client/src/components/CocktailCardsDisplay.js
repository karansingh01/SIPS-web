"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const CocktailCard_1 = __importDefault(require("./CocktailCard"));
function CocktailCardsDisplay({ cocktails, }) {
    /* For søk. Denne funker ikke helt som jeg vil atm */
    /*       const [query, setQuery] = useState('')
        const [cocktails, setCocktails] = useState(dummyCocktails);
        const [filteredResults, setFilteredResults] = useState(dummyCocktails);
  
         const searchItems = (searchValue : string) => {
           setQuery(searchValue);
           console.log(searchValue);
           if (query !== ''){
           const filteredData = cocktails.filter((cocktail) => {
              return Object.values(cocktail).join('').toLowerCase().includes(query.toLowerCase())
          })
           setFilteredResults(filteredData)
          } else {
           setFilteredResults(cocktails)
          }
         }; */
    return (<react_2.SimpleGrid columns={[1, 2, 3]} minChildWidth={"330px"} spacing={1} backgroundColor={"#ede6df"} rounded={20}>
      {cocktails.length > 0 ? (<>
          {cocktails[0] ? (cocktails.map((cocktail) => (<CocktailCard_1.default key={cocktail.id} cocktail={cocktail}/>))) : (<react_2.Text>There are no cocktails available</react_2.Text>)}
        </>) : (<react_2.Text>There are no cocktails available</react_2.Text>)}
    </react_2.SimpleGrid>);
}
exports.default = CocktailCardsDisplay;
