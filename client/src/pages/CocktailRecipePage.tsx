import React from "react";
import { SimpleGrid, Flex, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CocktailRecipe from "../components/CocktailRecipe/CocktailRecipe";
import "./Pages.css";
import Navbar from "../components/Navbar";
import { BsArrowLeft } from "react-icons/bs";

const CocktailRecipePage = () => {
  return (
    <div className="lol">
      <Flex flexDirection="column">
        <Navbar />
        <HStack
          marginLeft={"3"}
          marginTop={"30px"}
          marginBottom={"20px"}
          marginRight={"75px"}
        >
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
