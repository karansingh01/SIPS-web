import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useQuery, gql } from "@apollo/client";
import { client } from "../api/client";
import { alcoholFilterParam } from "../api/graphql/alcoholFilter";

const GET_DRINKS_BY_INGREDIENT = gql`
  query GetDrinksByIngredient($ingredient: String) {
    getDrinksByIngredient(ingredient: $ingredient) {
      idDrink
      strDrink
      strDrinkThumb
    }
  }
`;

const GetByAlcohol = (alcohol: string) => {
  const { loading, error, data } = useQuery(GET_DRINKS_BY_INGREDIENT, {
    variables: { ingredient: alcohol },
  });
  if (loading) {
    console.log("loading ...");
  }

  if (error) {
    // Handle error?
    console.log("error, ", error.message);
  }

  let drinkz: {
    id: number;
    name: string;
    image: string;
  }[] = [];

  data.getDrinksByIngredient.map((drink: any) => {
    drinkz.push({
      id: parseInt(drink.idDrink),
      name: drink.strDrink,
      image: drink.strDrinkThumb,
    });
  });

  /*  console.log("alcohol: ", alcohol, "drinks: ", drinkz); */
  return drinkz;
  /* setFilteredCocktails(drinks); */
};

export default function FilterButtons({
  setFilteredCocktails,
  setQuery,
}: {
  setFilteredCocktails: Function;
  setQuery: Function;
}) {
  const alcohols: string[] = ["Vodka", "Gin", "Tequila", "Rum", "All"];

  /**
   *
   * @param drinks all cocktails
   * @param alc button pressed (gin | tequila | rum | vodka | none)
   * @returns array of drinks with certain alcohol
   */
  const FilterByAlcohol = (alcohol: string) => {
    let drinks: {
      id: number;
      name: string;
      image: string;
    }[] = [];

    if (alcohol === "All") {
      drinks = drinks;
    } else {
      drinks = GetByAlcohol(alcohol);
    }

    console.log("alcohol: ", alcohol, "drinks: ", drinks);
    setFilteredCocktails(drinks);
  };

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={<FaAngleRight />}
          >
            {isOpen ? "Close" : "Filter by liquor"}
          </MenuButton>
          <MenuList>
            {alcohols.map((alcohol) => (
              <MenuItem key={alcohol} onClick={() => FilterByAlcohol(alcohol)}>
                {alcohol}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}
