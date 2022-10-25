import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import dummyCocktails from "../DummyData";
import CocktailCardsDisplay from "../components/CocktailCardsDisplay";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Pages.css";

const FavoriteCocktailsPage = () => {
  /**
   * Filtrerer ut alle favoritter
   */
  const favoriteCocktails = dummyCocktails.filter(
    (cocktail) => cocktail.favorite
  );

  /* For søk. Denne funker ikke heeelt som jeg vil atm */
  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState(favoriteCocktails);
  const [filteredResults, setFilteredResults] = useState(favoriteCocktails);

  const searchItems = (searchValue: string) => {
    setQuery(searchValue);
    console.log(searchValue);
    if (query !== "") {
      const filteredData = cocktails.filter((cocktail) => {
        return Object.values(cocktail.name)
          .join("")
          .toLowerCase()
          .includes(query.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(cocktails);
    }
  };

  return (
    <div className="lol">
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
        <Spacer />
        <Heading color={"beige"} fontSize={"40px"}>
          My favorite drinks
        </Heading>
        <Spacer />
      </HStack>
      <Flex flexDirection="column">
        <Grid
          margin={"30px"}
          rounded={20}
          templateRows="repeat(1fr)"
          templateColumns="repeat(1fr)"
          gap={4}
          mt={5}
        >
          <GridItem colSpan={4}>
            <SearchBar q={query} searchItems={searchItems} />
          </GridItem>
          <GridItem colSpan={4}>
            <CocktailCardsDisplay cocktails={filteredResults} />
          </GridItem>
        </Grid>
      </Flex>
    </div>
  );
};

export default FavoriteCocktailsPage;
