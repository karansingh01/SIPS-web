import { Button, Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { gql, useQuery, useReactiveVar } from "@apollo/client";

import CocktailCardsDisplay from "../components/CocktailCardsDisplay";
import FilterButtons from "../components/FilterButtons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import dummyCocktails from "../DummyData";
import { resolveProjectReferencePath } from "typescript";
import { FaSortNumericDownAlt } from "react-icons/fa";
import { offset } from "../cache";
const GET_ALL_DRINKS = gql`
  query GetAllDrinks {
    getAllDrinks {
      idDrink
      strDrink
      strDrinkThumb
    }
  }
`;

const GET_DRINKS_FROM_INDEX = gql`
  query GetDrinksFromIndex($amount: Int, $index: Int) {
    getDrinksFromIndex(amount: $amount, index: $index) {
      idDrink
      strDrink
      strDrinkThumb
    }
  }
`;

const AllCocktailsPage = () => {
  const { loading, error, data } = useQuery(GET_DRINKS_FROM_INDEX, {
    variables: { amount: useReactiveVar(offset), index: 0 },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    // Handle error?
    return <p>{error as any}</p>;
  }
  console.log(data.getDrinksFromIndex);
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
          {/* <SearchBar q={query} setQuery={setQuery} /> */}
        </GridItem>
        <GridItem colSpan={4}>
          {/* <CocktailCardsDisplay cocktails={filteredCocktails} /> 
          cocktailcards need {id (som number), name, image}*/}
          <CocktailCardsDisplay cocktails={data.getDrinksFromIndex} />
        </GridItem>

        <Button
          onClick={() => {
            offset(offset() + 8);
          }}
        >
          View more...
        </Button>
      </Grid>
    </Flex>
  );
};

export default AllCocktailsPage;
