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







 /*  useEffect(() => {
    if (alcohol === "All") {
      console.log("show all cocktails", allData.getAllDrinks);
    } 
    else {
      console.log("show filtered cocktails", data.getDrinksByIngredient);
        alcoholRefetch({ ingredient: alcohol });
        console.log(
          "filter cocktails by",
          alcohol,
          ":",
          data.getDrinksByIngredient
        );
      }
  }, [alcohol]); 
 */

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    // Handle error?
    return <p>{error as any}</p>;
  }

  console.log("AAAAAA ",data);
console.log("alcohol", alcohol);



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
