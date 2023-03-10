import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";

import CocktailCardsDisplay from "../components/CocktailCardsDisplay";
import FilterButtons from "../components/FilterButtons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";


const GET_DRINKS_BY_NAME_CONTAINS = gql`
  query GetDrinksByNameContains($recipename: String, $ingredient: String ) {
    getDrinksByNameContains(recipename: $recipename, ingredient: $ingredient) {

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
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
      strMeasure7
      strMeasure8
      strInstructions
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
      strIngredient7
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
      strMeasure7
    }
  }
`;
export default function RumPage ( /* {
    setAlcoholType,
  }: {
    setAlcoholType: string;
  } */) 
  {

const [query, setQuery] = useState("");

  const [cocktails, setCocktails] = useState([]);


  const [getQuery, { loading: loading1, error: error1, data: data1 }] = useLazyQuery(GET_DRINKS_BY_NAME_CONTAINS,{
    variables: { recipename: query, ingredient: "Rum" },
    onCompleted: (data1) => {
      setCocktails(data1.getDrinksByNameContains);
    },
  });


const  { loading,  error, data } = useQuery(GET_DRINKS_BY_INGREDIENT,{
    variables: { ingredient: "Rum" },
    onCompleted: (data) => {
    setCocktails(data.getDrinksByIngredient);
    },
});

  useEffect(() => {
    getQuery();
    if (data) {
      setCocktails(data.getDrinksByIngredient);
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
          <SearchBar q={query} setQuery={setQuery} />
        </GridItem>
        <FilterButtons/>
        <GridItem colSpan={4}>
          <CocktailCardsDisplay cocktails={cocktails} />
        </GridItem>
      </Grid>
    </Flex>
  );
};


