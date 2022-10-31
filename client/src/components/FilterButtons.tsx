import React, { useEffect, useState } from "react";
import {
  ButtonGroup,
  Button,
  Stack,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { alcoholFilterParam } from "../api/graphql/alcoholFilter";
import { client } from "../api/client";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import AllCocktailsPage from "../pages/AllCocktailsPage";
import { useQuery } from "@apollo/client";
import { log } from "console";

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
  const FilterByAlcohol = async (alc: string) => {
    let drinks: {
      id: number;
      name: string;
      image: string;
    }[] = [];

    if (alc === "All") {
      /**fremtidig: vise alle cocktails fra hele api-et (opprinnelig liste) her */
      drinks = drinks;
    } else {
      const result = await client.refetchQueries({
        include: "all",
        updateCache(cache) {
          cache.evict({ fieldName: "alcoholFilter" });
        },
      });
      const { data } = await client.query({
        query: alcoholFilterParam(alc),
      });
      const drinkList = data.alcoholFilter.drinks;
      console.log("drinkList:", drinkList);
      drinkList.map((drink: any) => {
        drinks.push({
          id: parseInt(drink.idDrink),
          name: drink.strDrink,
          image: drink.strDrinkThumb,
        });
      });
      console.log("drinks from drinkList:", drinks);
    }
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
