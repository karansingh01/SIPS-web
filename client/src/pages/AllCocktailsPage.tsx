import { Button, Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { gql, useLazyQuery, useQuery, useReactiveVar } from "@apollo/client";

import CocktailCardsDisplay from "../components/CocktailCardsDisplay";
import FilterButtons from "../components/FilterButtons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { offset } from "../cache";

const GET_DRINKS_BY_NAME_CONTAINS = gql`
  query GetDrinksByNameContains($recipename: String) {
    getDrinksByNameContains(recipename: $recipename) {
      idDrink
      strDrink
      strDrinkThumb
      strGlass
      strIngredient1
      strIngredient2
      strIngredient3
      strIngredient4
      strIngredient5
      strIngredient6
      strIngredient7
      strIngredient8
      strIngredient9
      strIngredient10
      strInstructions
    }
  }
`;

const GET_DRINKS_FROM_INDEX = gql`
  query GetDrinksFromIndex($amount: Int, $index: Int) {
    getDrinksFromIndex(amount: $amount, index: $index) {
      idDrink
      strDrink
      strDrinkThumb
      strGlass
      strIngredient1
      strIngredient2
      strIngredient3
      strIngredient4
      strIngredient5
      strIngredient6
      strIngredient7
      strIngredient8
      strIngredient9
      strIngredient10
      strInstructions
    }
  }
`;

const AllCocktailsPage = () => {
  const { loading, error, data } = useQuery(GET_DRINKS_FROM_INDEX, {
    variables: { amount: useReactiveVar(offset), index: 0 },
  });

  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const [getQuery, { loading: loading1, error: error1, data: data1 }] = useLazyQuery(GET_DRINKS_BY_NAME_CONTAINS,{
    variables: { recipename: query },
    onCompleted: (data1) => {
      setCocktails(data1.getDrinksByNameContains);
    },
  });

  useEffect(() => {
    if (data) {
      setCocktails(data.getDrinksFromIndex);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    // Handle error?
    return <p>{error as any}</p>;
  }
  
  return (
    <Flex flexDirection="column">
      {/* <SearchBar /> */}
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
          <Button onClick={() => getQuery()}>Search</Button>
        <GridItem colSpan={4}>
          {/* <CocktailCardsDisplay cocktails={filteredCocktails} /> 
          cocktailcards need {id (som number), name, image}*/}
          <CocktailCardsDisplay cocktails={cocktails} />
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
