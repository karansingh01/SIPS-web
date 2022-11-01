import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import {gql, useQuery} from '@apollo/client';

import CocktailCardsDisplay from '../components/CocktailCardsDisplay';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import dummyCocktails from '../DummyData';

const GET_ALL_DRINKS = gql`
  query GetAllDrinks {
    getAllDrinks {
      idDrink
      strDrink
      strDrinkThumb
    }
  }
`;

const GET_DRINKS_BY_INGREDIENT = gql`
  query GetDrinksByIngredient($ingredient: String) {
    getDrinksByIngredient(ingredient: $ingredient) {
      idDrink
      strDrink
      strDrinkThumb
    }
  }
`;



let allDrinks: {
  id: number;
  name: string;
  image: string;
}[] = [];



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
      console.log("cocktail", cocktail);
      console.log("filtered ",Object.values(cocktail.name)
      .join("")
      .toLowerCase()
      .includes(query.toLowerCase()))


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
  const [cocktails, setCocktails] = useState(allDrinks);
  const [filteredCocktails, setFilteredCocktails] = useState(cocktails);

  console.log("all drinks length", cocktails.length, cocktails);
  console.log("filtered cocktails", filteredCocktails);

console.log(query);


  useEffect(() => {
    let filter = filterCocktails(cocktails, query);
    setFilteredCocktails(filter);
  }, [query, setQuery]);



  const options = ["Vodka", "Rum", "Tequila", "Gin", "All"];
    const [alcohol, setAlcohol] = useState("");
    const {
      loading,
      error,
      data,
      refetch: alcoholRefetch,
    } = useQuery(GET_DRINKS_BY_INGREDIENT, {
      variables: { ingredient: alcohol},
      /*  fetchPolicy: "network-only", */
    });
    
  
    const {
      loading: allLoading,
      error: allError,
      data: allData,
      refetch: allRefetch,
    } = useQuery(GET_ALL_DRINKS /* , { fetchPolicy: "network-only" } */);
  
    const handleChange = (chosenAlcohol: string) => {
      if (alcohol !== chosenAlcohol) {
        setAlcohol(chosenAlcohol);
      }
    };
  

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
    <FilterButtons/>
      
        <GridItem colSpan={3}>
          {/* <SearchBar q={query} setQuery={setQuery} /> */}
        </GridItem>
        <GridItem colSpan={4}>
          {/* <CocktailCardsDisplay cocktails={filteredCocktails} /> 
          cocktailcards need {id (som number), name, image}*/}
          <CocktailCardsDisplay cocktails={data.getAllDrinks} />
        </GridItem>
      </Grid>
    </Flex>
  );
};
}

export default AllCocktailsPage;
