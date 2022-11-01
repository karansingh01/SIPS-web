import { filter, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";

import CocktailCardsDisplay from "../components/CocktailCardsDisplay";
import FilterButtons from "../components/FilterButtons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import dummyCocktails from "../DummyData";

/**
 * search filter method
 * @param cocktails all (currently shown?) cocktails
 * @param query string entered in search field
 * @returns all cocktails containing the search param
 */
const filterCocktails = (
  cocktails: {
    id: number;
    name: string;
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

const AllCocktailsPage = () => {
  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState(
    filterCocktails(dummyCocktails, query)
  );
  const [filteredCocktails, setFilteredCocktails] = useState(
    filterCocktails(cocktails, query)
  );

  useEffect(() => {
    const filter = filterCocktails(cocktails, query);
    setFilteredCocktails(filter);
  }, [query, setQuery]);
  /*   const { loading, error, data } = useQuery(GET_GEN_3);
  console.log(data); */

  return (
    <Flex flexDirection="column">
      <Header />
      <Grid
        transform="translate(0px, -150px)"
        margin={"30px"}
        rounded={20}
        templateRows="repeat(1fr)"
        templateColumns="repeat(1fr)"
        gap={4}
        mt={5}
      >
        <GridItem colSpan={3}>
          <SearchBar q={query} setQuery={setQuery} />
        </GridItem>
        <GridItem colSpan={1}>
          <FilterButtons
            setFilteredCocktails={setFilteredCocktails}
            setQuery={setQuery}
          />
        </GridItem>
        <GridItem colSpan={4}>
          <CocktailCardsDisplay cocktails={filteredCocktails} />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default AllCocktailsPage;
