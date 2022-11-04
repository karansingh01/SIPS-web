import "./Pages.css";

import { Flex, HStack } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

import CocktailRecipe from "../components/CocktailRecipe";

import Navbar from "../components/Navbar";

const CocktailRecipePage = () => {
  return (
    <div className="drinkPage">
      <Flex flexDirection="column">
        <Navbar />
        <HStack marginLeft={"3"} marginTop={"25px"} marginRight={"75px"}>
          <Link to="/">
            <BsArrowLeft size={60} color={"beige"} />
          </Link>
        </HStack>
        <CocktailRecipe />
      </Flex>
    </div>
  );
};

export default CocktailRecipePage;
