import React from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { client } from "../api/client";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import dummyCocktails from "../DummyData";
import CocktailCardsDisplay from "../components/CocktailCardsDisplay";
import { VodkaDrinksQuery } from "../api/graphql/vodkaDrinks";
import { RumDrinksQuery } from "../api/graphql/rumDrinks";
import { TequilaDrinksQuery } from "../api/graphql/tequilaDrinks";
import { GinDrinksQuery } from "../api/graphql/ginDrinks";
import { alcoholFilterParam } from "../api/graphql/alcoholFilter";
import FilterButtons from "../components/FilterButtons";

/**
 * search filter method
 * @param cocktails all cocktails
 * @param query string entered in search field
 * @returns all cocktails containing the search param
 */
const filterCocktails = (
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

/**
 *
 * @param drinks all cocktails
 * @param alc button pressed (gin | tequila | rum | vodka | none)
 * @returns array of drinks with certain alcohol
 */
const filterByAlc = (
  drinks: {
    id: number;
    name: string;
    image: string;
  }[],
  alc: string
) => {
  if (alc === "") {
    drinks = drinks;
  } else {
    client.query({ query: alcoholFilterParam(alc) }).then((response) => {
      let alldrinks: {
        idDrink: string;
        strDrink: string;
        strDrinkThumb: string;
      }[] = [];
      alldrinks = response.data.alcoholFilter.drinks;
      alldrinks.map((drink) =>
        drinks.push({
          id: parseInt(drink.idDrink),
          name: drink.strDrink,
          image: drink.strDrinkThumb,
        })
      );

      /* console.log(alc, "DRINKS: ", drinks); */
    });
  }
  return drinks;
};

const AllCocktailsPage = () => {
  const [query, setQuery] = useState("");
  const cocktails = dummyCocktails;
  const [filteredCocktails, setFilteredCocktails] = useState(
    filterCocktails(cocktails, query)
  );

  let alcohol: string = "tequila";
  let dranks: {
    id: number;
    name: string;
    image: string;
  }[] = [];
  const yumyum = filterByAlc(dranks, alcohol);
  console.log("in allcocktailspage: ", yumyum);

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
          <FilterButtons />
        </GridItem>
        <GridItem colSpan={4}>
          <CocktailCardsDisplay cocktails={filteredCocktails} />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default AllCocktailsPage;
