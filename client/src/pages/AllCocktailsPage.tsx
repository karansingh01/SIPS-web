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
  allDrinks.push({
    id: 1,
    name: "test",
    image:
      "https://www.liquor.com/thmb/fO-COKLw_iEA28v8K4XQjzMhkfw=/735x0/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg",
  });

  console.log(allDrinks);
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

  console.log(allDrinks);
});

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
    /*     
    description: string;
    favorite: boolean; 
    (ikke tilgjengelig i api-et, måtte derfor fjernes)
    */
    image: string;
  }[],
  query: string
) => {
  console.log("query in filterCocktails: ", query);
  console.log("cocktails in filterCocktails: ", cocktails);
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
  console.log("all drinks", allDrinks);
  /* const cocktails = allDrinks; */
  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState(
    filterCocktails(dummyCocktails, query)
  );
  const filteredCocktails = filterCocktails(cocktails, query);

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

export default AllCocktailsPage;
