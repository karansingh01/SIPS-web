import {
  Stack,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import gql from "graphql-tag";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_DRINKS_BY_NAME_CONTAINS = gql`
  query GetDrinksByNameContains($recipename: String) {
    getDrinksByNameContains(recipename: $recipename) {
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
    }
  }
`;
const GET_DRINKS_BY_NAME_CONTAINS_ANY = gql`
  query getDrinksByNameContainsAny($recipename: String, $alcohol: String) {
    getDrinksByNameContainsAny(recipename: $recipename, alcohol: $alcohol) {
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
    }
  }
`;

export default function SearchBar({
  q,
  setQuery,
}: {
  q: string;
  setQuery: Function;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Stack marginLeft={1}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FaSearch color="lightpink" />}
        />
        <Input
          type={"search"}
          placeholder="Search..."
          color={"white"}
          value={q}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <Button onClick={() => getSearchTerm({ variables: { recipename: q } })}>
        Search
      </Button> */}
      </InputGroup>
    </Stack>
  );
}
