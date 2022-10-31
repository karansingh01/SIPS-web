import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import AlphabetButtons from "../components/AlphabetButtons";
import CocktailCardsDisplay from "../components/CocktailCardsDisplay";
import FilterButtons from "../components/FilterButtons";
import Header from "../components/Header";
import { LetterAQuery } from "../api/graphql/letterA";
import { client } from "../api/client";
import React from 'react';
import { useQuery, gql } from '@apollo/client';

interface getDrinksByNameInterface{
  idDrink: String;
  strDrink: String;
  strDrinkThumb: String;
}

const GET_DRINKS_BY_NAME = gql`
  query GetDrinksByName($recipename: String) {
    getDrinksByName(recipename: $recipename) {
      idDrink
      strDrink
      strDrinkThumb
    }
  }
`;

// need to make this as a model and resolver
const GET_ALL_DRINKS = gql`
  query GetAllDrinks {
    getAllDrinks {
      idDrink
      strDrink
      strDrinkThumb
    }
  }
`;

console.log("what the fuck")



const TestPage = () => {
  
  /*   const { loading, error, data } = useQuery(GET_GEN_3);
  console.log(data); */
  
  // gets the drink with the name 501 Blue
  // const { loading, error, data } = useQuery(GET_DRINKS_BY_NAME, {
  //   variables: { recipename: "501 Blue" },
  // });

  const { loading, error, data } = useQuery(GET_ALL_DRINKS);
  
  console.log(data);
    
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
          <GridItem colSpan={1}>
          </GridItem>
          <GridItem colSpan={4}>
          </GridItem>
        </Grid>
      </Flex>
    );
  };
  
    
export default TestPage;