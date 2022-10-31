import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { client } from '../api/client';
import InfiniteScroll from 'react-infinite-scroller';
import CocktailCardsDisplay from '../components/CocktailCardsDisplay';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import dummyCocktails from '../DummyData';
import { AlcoholicDrinkQuery } from "../api/graphql/alcoholicDrinks";
import { NonAlcoholicDrinkQuery } from "../api/graphql/nonAlcoholicDrinks";
import { log } from 'console';




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
  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState(
    filterCocktails(dummyCocktails, query)
  );
  const filteredCocktails = filterCocktails(cocktails, query);

/*   const { loading, error, data } = useQuery(GET_GEN_3);
  console.log(data); */
  const itemsPerPage = 5;
  const [hasMore, setHasMore] = useState(true);
  const [records, setrecords] = useState(itemsPerPage);
  const loadMore = () => {
    console.log(dummyCocktails.length);
    if (records === dummyCocktails.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setrecords(records + itemsPerPage);
      }, 2000);
    }
  };


  return (
    <Flex flexDirection="column">
      <Header />
      <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={<h4 className="loader">Loading...</h4>}
          useWindow={false}
    
>


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
    </InfiniteScroll>
    </Flex>
  );
};

export default AllCocktailsPage;
