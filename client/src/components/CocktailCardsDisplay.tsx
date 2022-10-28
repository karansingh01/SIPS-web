import React from "react";
import { SimpleGrid, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import CocktailCard from "./CocktailCard";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import dummyCocktails from "../DummyData";

export default function CocktailCardsDisplay({
  cocktails,
}: {
  cocktails: {
    id: number;
    name: string;
    /*     description: string;
    favorite: boolean; */
    image: string;
  }[];
}) {
  /* For søk. Denne funker ikke helt som jeg vil atm */
  /*       const [query, setQuery] = useState('')
      const [cocktails, setCocktails] = useState(dummyCocktails);
      const [filteredResults, setFilteredResults] = useState(dummyCocktails);

       const searchItems = (searchValue : string) => {
         setQuery(searchValue);
         console.log(searchValue);
         if (query !== ''){
         const filteredData = cocktails.filter((cocktail) => {
            return Object.values(cocktail).join('').toLowerCase().includes(query.toLowerCase())
        })
         setFilteredResults(filteredData)
        } else {
         setFilteredResults(cocktails)
        }
       }; */

  return (
    <SimpleGrid
      columns={[1, 2, 3]}
      minChildWidth={"330px"}
      spacing={1}
      backgroundColor={"#ede6df"}
      rounded={20}
    >
      {cocktails.length > 0 ? (
        <>
          {cocktails[0] ? (
            cocktails.map((cocktail) => (
              <CocktailCard key={cocktail.id} cocktail={cocktail} />
            ))
          ) : (
            <Text>There are no cocktails available</Text>
          )}
        </>
      ) : (
        <Text>There are no cocktails available</Text>
      )}
    </SimpleGrid>
  );
}
