import React from "react";
import { SimpleGrid, Flex, Text } from "@chakra-ui/react";
import CocktailCard from "../components/CocktailCard";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "./Pages.css";

const FavoritesPage = () => {
  return (
    <div className="lol">
      <Flex flexDirection="column">
        <Navbar />
        <Text>Hei carolina, here are your favz</Text>
      </Flex>
    </div>
  );
};

export default FavoritesPage;
