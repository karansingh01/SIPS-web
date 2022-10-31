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

/**
 * Search method
 * @param cocktails favorite cocktails
 * @param query the query parameter
 * @returns favorite cocktails containing the search param
 */
const filterFavCocktails = (
  cocktails: {
    id: number;
    name: string;
    description: string;
    favorite: boolean;
    image: string;
  }[],
  query: string
) => {
  if (query === "") {
    return cocktails;
  } else {
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
  /*   const favoriteCocktails = dummyCocktails.filter(
    (cocktail) => cocktail.favorite
  );
 */
  const [query, setQuery] = useState("");
  /*   const filteredFavCocktails = filterFavCocktails(favoriteCocktails, query); */

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
            <SearchBar q={query} setQuery={setQuery} />
          </GridItem>
          <GridItem colSpan={4}>
            {/*    <CocktailCardsDisplay cocktails={filteredFavCocktails} /> */}
          </GridItem>
        </Grid>
      </Flex>
    </div>
  );
};

export default FavoriteCocktailsPage;
