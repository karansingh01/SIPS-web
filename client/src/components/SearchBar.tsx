import {
  Stack,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import gql from 'graphql-tag'
import { useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';

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


export default function SearchBar( {
  q,
  setQuery,
}: {
  q: string;
  setQuery: Function;
}) {
  
  
  const [searchTerm, setSearchTerm] = useState('');
  const [getSearchTerm, { loading, error, data }] = useLazyQuery(GET_DRINKS_BY_NAME_CONTAINS,{
    variables: { recipename: searchTerm },
    onCompleted: (data) => {
      console.log(data.getDrinksByNameContains);
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    // Handle error?
    return <p>{error as any}</p>;
  }

  if (data) {
    console.log(data);
  }

  return (
    
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FaSearch color="black" />}
        />
        <Input
          type={"search"}
          placeholder="What drink are you looking for?"
          color={"white"}
          // onChange={(event) => {
          //   setSearchTerm(event.target.value);
          // }}
          value={q}
          onChange={(e) => setQuery(e.target.value)}

        />
      {/* <Button onClick={() => getSearchTerm({ variables: { recipename: q } })}>
        Search
      </Button> */}
      </InputGroup>
      <Text>{searchTerm}</Text>
    </Stack>
  );
}