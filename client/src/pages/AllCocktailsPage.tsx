import React from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import dummyCocktails from "../DummyData";
import CocktailCardsDisplay from "../components/CocktailCardsDisplay";

const AllCocktailsPage = () => {
  /* For søk. Denne funker ikke heeelt som jeg vil atm */
  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState(dummyCocktails);
  const [filteredResults, setFilteredResults] = useState(dummyCocktails);

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
    <Flex flexDirection="column">
      <Header />
      <Grid
        transform="translate(0%, -15%)"
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
  );
};

export default AllCocktailsPage;
