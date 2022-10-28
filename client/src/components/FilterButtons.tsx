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

export default function FilterButtons({
  setFilteredCocktails,
}: {
  setFilteredCocktails: Function;
}) {
  const alcohols: string[] = ["Vodka", "Gin", "Tequila", "Rum"];

  /**
   *
   * @param drinks all cocktails
   * @param alc button pressed (gin | tequila | rum | vodka | none)
   * @returns array of drinks with certain alcohol
   */
  const filterByAlcohol = (
    /* drinks: {
      id: number;
      name: string;
      image: string;
    }[], */
    alc: string
  ) => {
    let drinks: {
      id: number;
      name: string;
      image: string;
    }[] = [];
    if (alc === "") {
      drinks = drinks;
    } else {
      client.query({ query: alcoholFilterParam(alc) }).then((response) => {
        let alldrinks: {
          idDrink: string;
          strDrink: string;
          strDrinkThumb: string;
        }[] = [];
        alldrinks = response.data.alcoholFilter.drinks;
        alldrinks.map((drink) =>
          drinks.push({
            id: parseInt(drink.idDrink),
            name: drink.strDrink,
            image: drink.strDrinkThumb,
          })
        );
      });
    }
    console.log("drinks in filterbyalcohol: ", drinks);
    /* setFilteredCocktails(drinks); */
    return drinks;
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
              <MenuItem
                key={alcohol}
                onClick={() =>
                  /* filterByAlcohol(
                      alcohol
                    ) */ setFilteredCocktails(filterByAlcohol(alcohol))
                }
              >
                {alcohol}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}
