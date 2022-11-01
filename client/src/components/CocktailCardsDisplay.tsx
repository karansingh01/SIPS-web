import { SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';
import CocktailCard from './CocktailCard';

export default function CocktailCardsDisplay({
  cocktails,
}: {
  cocktails: {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
  }[];
}) {
  const [sortedDown, setSortedDown] = useState(true);

  const toggleSort = () => {
    cocktails.reverse();
    setSortedDown(!sortedDown);
  };
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
    <div>
      {/* <Stack marginLeft={20} marginTop={20}> */}
      {sortedDown ? (
        <FaSortAlphaDown
          onClick={toggleSort}
          style={{
            position: "absolute",
            top: "70px",
            right: "20px",
          }}
        />
      ) : (
        <FaSortAlphaUp
          onClick={toggleSort}
          style={{
            position: "absolute",
            top: "70px",
            right: "20px",
          }}
        />
      )}
      {/*  </Stack> */}
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
              cocktails.map((cocktail, index) => (
                console.log("cocktail", cocktail),
                console.log("index", index),
                console.log("cocktail id", cocktail.idDrink),
                console.log("cocktail name", cocktail.strDrink),
                console.log("cocktail image", cocktail.strDrinkThumb),
                <CocktailCard key={index} cocktail={cocktail} />
              ))
            ) : (
              <Text>There are no cocktails available</Text>
            )}
          </>
        ) : (
          <Text>There are no cocktails available</Text>
        )}
      </SimpleGrid>
    </div>
  );
}
