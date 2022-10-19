import React from "react";
import { SimpleGrid, Flex, Text } from "@chakra-ui/react";
import CocktailCard from "../components/CocktailCard";
import Header from "../components/Header";
import CocktailRecipe from "../components/CocktailRecipe";

const CocktailRecipePage = () => {
  return (
    <Flex flexDirection="column">
      <Text>Logo and favorites in navbar here!</Text>
      <CocktailRecipe />
    </Flex>
  );
};

export default CocktailRecipePage;
