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
import {
  alcoholFilterParam,
  /* refetchAlcoholFilterParam, */
} from "../api/graphql/alcoholFilter";
import { client } from "../api/client";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import AllCocktailsPage from "../pages/AllCocktailsPage";
import { useQuery } from "@apollo/client";
import { log } from "console";

/**
 * Issue i FilterButtons er å refetche query for alkohol (alcoholFilterParam(alcohol) fra alcoholFilter.ts).
 * Dette må refetches på et vis, sannsynligvis ved hjelp av én av to reftech-metoder:
 *
 * Første er useQuery-refetch, se eksempel i funksjonen Alcohol(). Denne gir mer nå ingen resultat,
 * da den gir en Invalid Hook Call-error.
 *
 * Andre er client.refetchQuery, finnes som await-funksjon i filterByAlcohol.
 * Denne gir advarsel om at den ikke finner query, så resultatet blir derfor en tom liste.
 * Usikker på hva so gjør dette.
 */
export default function FilterButtons({
  setFilteredCocktails,
  setQuery,
}: {
  setFilteredCocktails: Function;
  setQuery: Function;
}) 
{
  const alcohols: string[] = ["Vodka", "Gin", "Tequila", "Rum", "All"];

  /**
   * Mulig metode for å fetche og refetche query: useQuery.
   * Får feilmelding om invalid hook call, usikker på hvorfor?
   * For å teste denne på siden, kalles den på når en trykker på "All" i dropdown-menyen.
   */
  function Alcohol({ alcohol }: { alcohol: string }) {
    const { loading, error, data, refetch } = useQuery(
      alcoholFilterParam(alcohol)
    );
    if (loading) return console.log("Loading...");
    if (error) return console.log(`Error! ${error.message}`);
    refetch({alcohol});
    return console.log("data Alcohol():", data.drinks);
  }
  /**
   *
   * @param drinks all cocktails
   * @param alc button pressed (gin | tequila | rum | vodka | none)
   * @returns array of drinks with certain alcohol
   */
  const FilterByAlcohol = async (alc: string) => {
    /**
     * Prøver å re-initialisere (tømme) listen av drinker (som skal vises i UI),
     * men den beholder drinks fra første knappetrykk.
     * Dersom en trykker "none" gir dette tom drinks-liste,
     * men ved nytt knappetrykk er vi tilbake til første alkoholvalg.
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
    if (alc === "All") {
      /**fremtidig: vise alle cocktails fra hele api-et (opprinnelig liste) her */
      /* refetchAlcoholFilterParam(alc); */
      /* return drinks; */
      Alcohol({ alcohol: alc });
    } else {
      const result = await client.refetchQueries({
        include: "all",
        updateCache(cache) {
          cache.evict({fieldName: "alcoholFilter"});
        },
      });
      const { data } = await client.query({
        query: alcoholFilterParam(alc),
      });
      console.log("data:", data);
      const drinkList = data.alcoholFilter.drinks;
      console.log("drinkList:", drinkList);
      drinks = drinkList.map((drink: any) => {
        return {
          id: drink.idDrink,
          name: drink.strDrink,
          image: drink.strDrinkThumb,
        };
      });

/*       client.query({ query: alcoholFilterParam(alc) }).then((response) => {
        let alldrinks: {
          idDrink: string;
          strDrink: string;
          strDrinkThumb: string;
        }[] = [];
        console.log("client.query respons:", response);
        alldrinks = response.data.alcoholFilter.drinks;
        alldrinks.map((drink) =>
          drinks.push({
            id: parseInt(drink.idDrink),
            name: drink.strDrink,
            image: drink.strDrinkThumb,
          })
        );
      });
 */
      /*
       * prøver å refetche query.
       * får i konsollen at query ikke ble funnet.
       */
  
  }
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
                onClick={() => setFilteredCocktails(FilterByAlcohol(alcohol))}
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

