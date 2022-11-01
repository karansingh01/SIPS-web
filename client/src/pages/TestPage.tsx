import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import AlphabetButtons from "../components/AlphabetButtons";
import CocktailCardsDisplay from "../components/CocktailCardsDisplay";
import FilterButtons from "../components/FilterButtons";
import Header from "../components/Header";
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
      strIngredient1
      strIngredient2
      strIngredient3
      strIngredient4
      strIngredient5
      strIngredient6
    }
  }
`;

const GET_DRINKS_BY_INGREDIENT = gql`
  query GetDrinksByIngredient($ingredient: String) {
    getDrinksByIngredient(ingredient: $ingredient) {
      idDrink
      strDrink
      strInstructions
      strDrinkThumb
      strIngredient1
      strIngredient2
      strIngredient3
      strIngredient4
      strIngredient5
      strIngredient6
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
    }
  }
  `;

const TestPage = () => {
  
  /*   const { loading, error, data } = useQuery(GET_GEN_3);
  console.log(data); */
  
  // gets the drink with the name 501 Blue
  // const { loading, error, data } = useQuery(GET_DRINKS_BY_NAME, {
  //   variables: { recipename: "501 Blue" },
  // });

  // gets all drinks
  const { loading, error, data } = useQuery(GET_ALL_DRINKS);

  // gets all drinks with a specific ingredient
  // const { loading, error, data} = useQuery(GET_DRINKS_BY_INGREDIENT , {
  //   variables: { ingredient: "Vodka" },
  //   });
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    // Handle error?
    return <p>{error as any}</p>;
  }
  
  console.log(data);
    
    return (
      <Flex flexDirection="column">
        <Header />
        <Grid>
        </Grid>
      </Flex>
    );
  };
  
    
export default TestPage;