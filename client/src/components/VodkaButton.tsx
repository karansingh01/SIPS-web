import { gql, useQuery } from "@apollo/client";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { log } from "console";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const GET_DRINKS_BY_INGREDIENT = gql`
  query GetDrinksByIngredient($ingredient: String) {
    getDrinksByIngredient(ingredient: $ingredient) {
      idDrink
      strDrink
      strDrinkThumb
    }
  }
`;


export default function VodkaButton( {
    setAlcoholQuery,
  }: {
    setAlcoholQuery: Function;
  }){

    const { loading, error, data } = useQuery(GET_DRINKS_BY_INGREDIENT, {
        variables: { ingredient: "Vodka" },
      });

      const [query, setQuery] = useState("");
      const [cocktails, setCocktails] = useState([]);
    


      useEffect(() => {
        if (data) {
          setCocktails(data.getDrinksByIngredient);
        }
      }, [data]);
    
      if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>{error as any}</p>;
      }
      
      console.log("cocktailsAAAAA:", cocktails);


console.log(cocktails[0]);

    return (
        <div>
        <p>Vodka knapp</p>
        <Button
        onClick={() => {
            setAlcoholQuery("Vodka");
        }}
        />
        </div>
      );
}