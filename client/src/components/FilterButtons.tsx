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
import {
  alcoholFilterParam,
  refetchAlcoholFilterParam,
} from "../api/graphql/alcoholFilter";
import { client } from "../api/client";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import AllCocktailsPage from "../pages/AllCocktailsPage";
import { useQuery } from "@apollo/client";

export default function FilterButtons({
  setFilteredCocktails,
}: {
  setFilteredCocktails: Function;
}) {
  const alcohols: string[] = ["Vodka", "Gin", "Tequila", "Rum", "All"];

  /**
   *
   * @param drinks all cocktails
   * @param alc button pressed (gin | tequila | rum | vodka | none)
   * @returns array of drinks with certain alcohol
   */
  const filterByAlcohol = (alc: string) => {
    /**
     * prøver å re-initialisere (tømme) listen,
     * men den beholder drinks fra første knappetrykk.
     * dersom en trykker "none" gir dette tom drinks-liste.
     */
    let drinks: {
      id: number;
      name: string;
      image: string;
    }[] = [];
    /**
     * ^ som forklart over, vist i konsollen:
     * drinks[] inneholder drinker fra første valgte alkohol,
     * men drinks[].length er allikevel 0?
     */
    console.log("1. filterbyAlc", alc, " drinks:", drinks);
    console.log("2. filterbyAlc drinks.length :", drinks.length);
    if (alc === "All") {
      /**fremtidig: vise alle cocktails her */
      return drinks;
    } else {
      /**
       * TROR DET ER HER PROBLEMET LIGGER:
       * response.data virker å "henge seg opp" i første query.
       * Returnerer kun den første listen inntil man refresher siden.
       * (allDrinks fylles med drinks fra første query, uavhengig av hva man trykker på)
       *
       * Fix alt.1: Refetch query (som prøvd i await-funksjon under)
       * Fix alt.2: Refreshe siden for hver gang (ikke optimalt mad andre ord)
       */
      /* if (drinks.length === 0) { */
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

      /* } */

      /* else {

        await client.refetchQueries({
          include: [alcoholFilterParam(alc)],
        });
        console.log("4. filterbyAlc refetchQuery :", drinks);
      } */
    }
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
                onClick={() => setFilteredCocktails(filterByAlcohol(alcohol))}
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
