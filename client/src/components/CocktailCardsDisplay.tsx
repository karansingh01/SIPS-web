import { SimpleGrid, Text, Stack } from "@chakra-ui/react";
import React from "react";
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
  return (
    <div id={"cocktailCardsDisplay"}>
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
            {cocktails.map((cocktail, index) => (
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
