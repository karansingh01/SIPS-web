import { SimpleGrid, Text, Stack } from "@chakra-ui/react";
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
    /*  cocktails.reverse(); */
    setSortedDown(!sortedDown);
    sorted(cocktails);
  };

  const sorted = (
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
    }[]
  ) => {
    let sortedCocktails: {
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
    }[] = [];
    cocktails.forEach((cocktail) =>
      sortedCocktails.push({
        idDrink: cocktail.idDrink,
        strDrink: cocktail.strDrink,
        strDrinkThumb: cocktail.strDrinkThumb,
        strGlass: cocktail.strGlass,
        strIngredient1: cocktail.strIngredient1,
        strIngredient2: cocktail.strIngredient2,
        strIngredient3: cocktail.strIngredient3,
        strIngredient4: cocktail.strIngredient4,
        strIngredient5: cocktail.strIngredient5,
        strIngredient6: cocktail.strIngredient6,
        strIngredient7: cocktail.strIngredient7,
        strIngredient8: cocktail.strIngredient8,
        strIngredient9: cocktail.strIngredient9,
        strIngredient10: cocktail.strIngredient10,
        strInstructions: cocktail.strInstructions,
      })
    );
    console.log(sortedCocktails);
    sortedCocktails.sort((a, b) => (a.strDrink > b.strDrink ? 1 : -1));
    console.log(sortedCocktails);
    return sortedCocktails;
  };

  return (
    <div id={"cocktailCardsDisplay"}>
      {/*  <Stack marginLeft={20} marginTop={20}> */}
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
      {/* </Stack> */}
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
            {sortedDown
              ? cocktails.map((cocktail, index) => (
                  <CocktailCard key={index} cocktail={cocktail} />
                ))
              : sorted(cocktails).map((cocktail, index) => (
                  <CocktailCard key={index} cocktail={cocktail} />
                ))}
          </>
        ) : (
          <Text>There are no cocktails available</Text>
        )}
      </SimpleGrid>
    </div>
  );
}
