import React from "react";
import { SimpleGrid, Flex, Text } from "@chakra-ui/react";
import CocktailCard from "../components/CocktailCard";
import Header from "../components/Header";
import CocktailRecipe from "../components/CocktailRecipe/CocktailRecipe";
import "./Pages.css";
import Navbar from "../components/Navbar/Navbar";

const CocktailRecipePage = () => {
  return (
    <div className="lol">
      <Navbar />
      <Flex flexDirection="column">
        <CocktailRecipe />
      </Flex>
    </div>
  );
};

export default CocktailRecipePage;
