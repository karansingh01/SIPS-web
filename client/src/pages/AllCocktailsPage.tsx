import { Button, Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { gql, useLazyQuery, useQuery, useReactiveVar } from "@apollo/client";
import {
  FaSortAlphaDown,
  FaSortAmountDownAlt,
} from "react-icons/fa";

import CocktailCardsDisplay from "../components/CocktailCardsDisplay";
import FilterButtons from "../components/FilterButtons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { offset } from "../cache";

const GET_DRINKS_BY_NAME_CONTAINS = gql`
  query getDrinksByNameContainsAny($recipename: String) {
    getDrinksByNameContainsAny(recipename: $recipename) {
      idDrink
      strDrink
      strDrinkThumb
      strGlass
      strIngredient1
      strIngredient2
      strIngredient3
      strIngredient4
      strIngredient5
      strIngredient6
      strIngredient7
      strIngredient8
      strIngredient9
      strIngredient10
      strInstructions
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
      strMeasure7
      strMeasure8
      strMeasure9
      strMeasure10
    }
  }
`;

const GET_DRINKS_FROM_INDEX = gql`
  query GetDrinksFromIndex($amount: Int, $index: Int) {
    getDrinksFromIndex(amount: $amount, index: $index) {
      idDrink
      strDrink
      strDrinkThumb
      strGlass
      strIngredient1
      strIngredient2
      strIngredient3
      strIngredient4
      strIngredient5
      strIngredient6
      strIngredient7
      strIngredient8
      strIngredient9
      strIngredient10
      strInstructions
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
      strMeasure7
      strMeasure8
      strMeasure9
      strMeasure10
    }
  }
`;

const AllCocktailsPage = () => {
  const { loading, error, data } = useQuery(GET_DRINKS_FROM_INDEX, {
    variables: { amount: useReactiveVar(offset), index: 0 },
  });

  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [visible, setVisible] = useState(true);

  const [sortedDown, setSortedDown] = useState(true);

  const toggleSort = () => {
    setSortedDown(!sortedDown);
    sorted(cocktails);
  };

  const sorted = (
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
      strInstructions: string;
    }[]
  ) => {
    let sortedCocktails: {
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
      strInstructions: string;
    }[] = [];
    cocktails.forEach((cocktail) =>
      sortedCocktails.push({
        idDrink: cocktail.idDrink,
        strDrink: cocktail.strDrink,
        strDrinkThumb: cocktail.strDrinkThumb,
        strGlass: cocktail.strGlass,
        strIngredient1: cocktail.strIngredient1,
        strIngredient2: cocktail.strIngredient2,
        strIngredient3: cocktail.strIngredient3,
        strIngredient4: cocktail.strIngredient4,
        strIngredient5: cocktail.strIngredient5,
        strIngredient6: cocktail.strIngredient6,
        strIngredient7: cocktail.strIngredient7,
        strIngredient8: cocktail.strIngredient8,
        strIngredient9: cocktail.strIngredient9,
        strIngredient10: cocktail.strIngredient10,
        strMeasure1: cocktail.strMeasure1,
        strMeasure2: cocktail.strMeasure2,
        strMeasure3: cocktail.strMeasure3,
        strMeasure4: cocktail.strMeasure4,
        strMeasure5: cocktail.strMeasure5,
        strMeasure6: cocktail.strMeasure6,
        strMeasure7: cocktail.strMeasure7,
        strMeasure8: cocktail.strMeasure8,
        strMeasure9: cocktail.strMeasure9,
        strMeasure10: cocktail.strMeasure10,
        strInstructions: cocktail.strInstructions,
      })
    );
    sortedCocktails.sort((a, b) => (a.strDrink > b.strDrink ? 1 : -1));
    return sortedCocktails;
  };

  // useLazyQuery makes it possible to use query when needed, and not on page load
  const [getQuery, { loading: loading1, error: error1, data: data1 }] =
    useLazyQuery(GET_DRINKS_BY_NAME_CONTAINS, {
      variables: { recipename: query },
      onCompleted: (data1) => {
        setCocktails(data1.getDrinksByNameContainsAny);
      },
    });

  useEffect(() => {
    if (data) {
      setCocktails(data.getDrinksFromIndex);
    }
    // makes search function work without button. Probably not the best way to do it, but
    // it works, so I'm not gonna change it. The reason we need the if statement is because
    // we don't want it to run on the first render, because then it would load all drinks
    if (query!=="") {
      getQuery();
    }
    // this scrolls to the bottom of the page when the page is loaded after getting more drinks
    window.scrollTo(0, document.body.scrollHeight);
  }, [query, data, getQuery]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    // Handle error?
    return <p>{error as any}</p>;
  }

  const removeElement = () => {
    offset(offset() + 26);
    setVisible((prev) => !prev);
  };

  return (
    <Flex flexDirection="column">
      <Header />

      <Grid
        transform="translate(0px, -150px)"
        margin={"30px"}
        rounded={20}
        templateRows="repeat(1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        mt={5}
      >
        <GridItem /*colSpan={3}*/ colStart={1} colEnd={4}>
          <SearchBar q={query} setQuery={setQuery} />
        </GridItem>
        <GridItem colEnd={5}>
          <FilterButtons />
        </GridItem>

        <GridItem>
          {sortedDown ? (
            <FaSortAlphaDown
              onClick={toggleSort}
              style={{
                position: "absolute",
                top: "77px",
                right: "20px",
                height: "1.3em",
                width: "1.3em",
              }}
            />
          ) : (
            <FaSortAmountDownAlt
              onClick={toggleSort}
              style={{
                position: "absolute",
                top: "77px",
                right: "20px",
                height: "1.3em",
                width: "1.3em",
              }}
            />
          )}
        </GridItem>
        <GridItem colSpan={4}>
          {/* <CocktailCardsDisplay cocktails={filteredCocktails} /> 
          cocktailcards need {id (som number), name, image}*/}
          {cocktails.length > 0 ? (
            sortedDown ? (
              <CocktailCardsDisplay cocktails={cocktails} />
            ) : (
              <CocktailCardsDisplay cocktails={sorted(cocktails)} />
            )
          ) : (
            <CocktailCardsDisplay cocktails={cocktails} />
          )}
        </GridItem>
        {visible && <Button onClick={removeElement}>View more</Button>}
      </Grid>
    </Flex>
  );
};

export default AllCocktailsPage;
