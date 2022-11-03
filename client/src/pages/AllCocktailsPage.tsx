import { Button, Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { gql, useLazyQuery, useQuery, useReactiveVar } from "@apollo/client";

import CocktailCardsDisplay from "../components/CocktailCardsDisplay";
import FilterButtons from "../components/FilterButtons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { offset } from "../cache";

const GET_DRINKS_BY_NAME_CONTAINS_ANY = gql`
  query getDrinksByNameContainsAny($recipename: String) {
    getDrinksByNameContainsAny(recipename: $recipename) {
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
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
      strMeasure7
      strMeasure8
      strMeasure9
      strMeasure10
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
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
      strMeasure7
      strMeasure8
      strMeasure9
      strMeasure10
    }
  }
`;

const AllCocktailsPage = () => {
  const { loading, error, data } = useQuery(GET_DRINKS_FROM_INDEX, {
    variables: { amount: useReactiveVar(offset), index: 0 },
  });

  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const [getQuery, { loading: loading1, error: error1, data: data1 }] =
    useLazyQuery(GET_DRINKS_BY_NAME_CONTAINS_ANY, {
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
          <SearchBar q={query} setQuery={setQuery} setAlcoholType={""} />
        </GridItem>
        <GridItem>
          <Button maxWidth={"fit-content"} onClick={() => getQuery()}>
            Search
          </Button>
        </GridItem>
        <FilterButtons />
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
