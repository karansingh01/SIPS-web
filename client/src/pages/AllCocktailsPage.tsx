import React from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { client } from "../api/client";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import CocktailCardsDisplay from "../components/CocktailCardsDisplay";
import { AlcoholicDrinkQuery } from "../api/graphql/alcoholicDrinks";
import { NonAlcoholicDrinkQuery } from "../api/graphql/nonAlcoholicDrinks";
import { VodkaDrinksQuery } from "../api/graphql/vodkaDrinks";
import { RumDrinksQuery } from "../api/graphql/rumDrinks";
import { TequilaDrinksQuery } from "../api/graphql/tequilaDrinks";
import { GinDrinksQuery } from "../api/graphql/ginDrinks";
import { alcoholFilterParam } from "../api/graphql/alcoholFilter";
import FilterButtons from "../components/FilterButtons";
import dummyCocktails from "../DummyData";
import { useQuery } from "@apollo/client";

let allDrinks: {
  id: number;
  name: string;
  image: string;
}[] = [];

client.query({ query: AlcoholicDrinkQuery }).then((response) => {
  const alcoholicDrinkList = response.data.alcoholicDrink.drinks;
  alcoholicDrinkList.map((drink: any) => {
    allDrinks.push({
      id: parseInt(drink.idDrink),
      name: drink.strDrink,
      image: drink.strDrinkThumb,
    });
  });
});



client.query({ query: NonAlcoholicDrinkQuery }).then((response) => {
  const nonAlcoholicDrinkList = response.data.nonAlcoholicDrink.drinks;
  nonAlcoholicDrinkList.map((drink: any) => {
    allDrinks.push({
      id: parseInt(drink.idDrink),
      name: drink.strDrink,
      image: drink.strDrinkThumb,
    });
  });

  console.log("legger til nonAlc " , allDrinks);
});

/**
 * search filter method
 * @param cocktails all (currently shown?) cocktails
 * @param query string entered in search field
 * @returns all cocktails containing the search param
 */

const showAllDrinks = () => {
  console.log("legger til showAll " , allDrinks);
  return allDrinks;
};

const filterCocktails = (
  cocktails: {
    id: number;
    name: string;
    image: string;
  }[],
  query: string,
  ) => {
  console.log("query length: ", query);
  console.log("cocktails length: ", allDrinks.length);
  if (query === "") {
    return showAllDrinks();
  } 
  else {
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
  console.log("all drinks", allDrinks);
  /* const cocktails = allDrinks; */
  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState(
    filterCocktails(allDrinks, query)
  );
  const filteredCocktails = filterCocktails(cocktails, query);

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
            setFilteredCocktails={setCocktails}
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


/* 
const getUseeffect = () => {
  useEffect(() => {
    client.query({
      query: AlcoholicDrinkQuery
    }).then((result) => {
      console.log(result);
      const drinks = result.data.alcoholicDrinks.drinks;
      drinks.map((drink: any) => {
        allDrinks.push({
          id: parseInt(drink.idDrink),
          name: drink.strDrink,
          image: drink.strDrinkThumb,
        });
      });
    });
  }, []);
  
  
  useEffect(() => {
    client.query({
      query: NonAlcoholicDrinkQuery
    }).then((result) => {
      console.log(result);
      const nonAlcoholicDrinkList = result.data.NonAlcoholicDrinkQuery.drinks;
      nonAlcoholicDrinkList.map((drink: any) => {
        allDrinks.push({
          id: parseInt(drink.idDrink),
          name: drink.strDrink,
          image: drink.strDrinkThumb,
        });
      });
    });
  }, []);
}

getUseeffect(); */


export default AllCocktailsPage;
