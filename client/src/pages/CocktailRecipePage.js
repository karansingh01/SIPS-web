"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_router_dom_1 = require("react-router-dom");
const CocktailRecipe_1 = __importDefault(require("../components/CocktailRecipe/CocktailRecipe"));
require("./Pages.css");
const Navbar_1 = __importDefault(require("../components/Navbar/Navbar"));
const bs_1 = require("react-icons/bs");
const CocktailRecipePage = () => {
    return (<div className="lol">
      <react_2.Flex flexDirection="column">
        <Navbar_1.default />
        <react_2.HStack marginLeft={"3"} marginTop={"30px"} marginBottom={"20px"} marginRight={"75px"}>
          <react_router_dom_1.Link to="/">
            <bs_1.BsArrowLeft size={60} color={"beige"}/>
          </react_router_dom_1.Link>
        </react_2.HStack>
        <CocktailRecipe_1.default />
      </react_2.Flex>
    </div>);
};
exports.default = CocktailRecipePage;
