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

const GET_ALL_DRINKS = gql`
  query GetAllDrinks {
    getAllDrinks {
      idDrink
      strDrink
      strDrinkThumb
    }
  }
`;

const FilterButtons = () => {
  const options = ["Vodka", "Rum", "Tequila", "Gin", "All"];
  const [alcohol, setAlcohol] = useState("All");
  const {
    loading,
    error,
    data,
    refetch: alcoholRefetch,
  } = useQuery(GET_DRINKS_BY_INGREDIENT, {
    variables: { ingredient: alcohol },
    /*  fetchPolicy: "network-only", */
  });
  const {
    loading: allLoading,
    error: allError,
    data: allData,
    refetch: allRefetch,
  } = useQuery(GET_ALL_DRINKS /* , { fetchPolicy: "network-only" } */);

  const handleChange = (chosenAlcohol: string) => {
    if (alcohol !== chosenAlcohol) {
      setAlcohol(chosenAlcohol);
    }
  };

  useEffect(() => {
    if (alcohol === "All") {
      console.log("show all cocktails", allData.getAllDrinks);
    } else {
      if (loading) {
        console.log("loading");
      } else {
        alcoholRefetch({ ingredient: alcohol });
        console.log(
          "filter cocktails by",
          alcohol,
          ":",
          data.getDrinksByIngredient
        );
      }
    }
  }, [alcohol]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    // Handle error?
    return <p>{error as any}</p>;
  }

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
            {options.map((option) => (
              <MenuItem key={option} onClick={() => handleChange(option)}>
                {option}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default FilterButtons;
