import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import CocktailCard from "./CocktailCard";

export default function CocktailCardsDisplay({
  cocktails,
}: {
  cocktails: {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strGlass: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strInstructions: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
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
    <div id={"cocktailCardsDisplay"}>
      {/* <Stack marginLeft={20} marginTop={20}> */}
      {/*{sortedDown ? (
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
        )}*/}
      {/*  </Stack> */}
      <SimpleGrid
        columns={[1, 2, 3]}
        minChildWidth={"330px"}
        spacing={1}
        backgroundColor={"#ede6df"}
        rounded={20}
        id={"cocktailCardsGrid"}
      >
        {cocktails.length > 0 ? (
          <>
            {cocktails[0] ? (
              cocktails.map((cocktail, index) => (
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
