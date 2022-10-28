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

export default function FilterButtons() {
  /**
   *
   * @param drinks all cocktails
   * @param alc button pressed (gin | tequila | rum | vodka | none)
   * @returns array of drinks with certain alcohol
   */
  const filterByAlcohol = (
    drinks: {
      id: number;
      name: string;
      image: string;
    }[],
    alc: string
  ) => {
    if (alc === "") {
      drinks = drinks;
    } else {
      /* drinks = []; */
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

        /* console.log(alc, "DRINKS: ", drinks); */
      });
    }
    /* return drinks*/
    return console.log("filterbyalcohol: ", drinks);
  };

  let dranks: {
    id: number;
    name: string;
    image: string;
  }[] = [];

  const alcohols: string[] = ["Vodka", "Gin", "Tequila", "Rum"];

  return (
    /*     <VStack>
      <Text color={"beige"}> Filter by liquor </Text>
      <ButtonGroup spacing={6} colorScheme={"black"} variant={"solid"}>
        <Button onClick={console.log(filterByAlcohol(dranks, "vodka"))}>
          Vodka
        </Button>
        <Button onClick={filterByAlcohol(dranks, "tequila")}>
          Tequila
        </Button>
        <Button onClick={filterByAlcohol(dranks, "rum")}>Rum</Button>
        <Button onClick={filterByAlcohol(dranks, "gin")}>Gin</Button>
      </ButtonGroup>
    </VStack> */

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
                onClick={
                  () => /* alert( */ filterByAlcohol([], alcohol) /* ) */
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
