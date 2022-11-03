import { gql, useQuery } from '@apollo/client';
import { Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const GET_ALL_DRINKS = gql`
  query GetAllDrinks {
    getAllDrinks {
      idDrink
      strDrink
      strDrinkThumb
      strInstructions
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

export default function CocktailDetails() {

  const { loading, error, data } = useQuery(GET_ALL_DRINKS);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error as any}</p>;
  }

  let randomDrink:number = Math.floor(Math.random() * 54);
  const strDrink = data.getAllDrinks[randomDrink].strDrink;
  const IMAGE = data.getAllDrinks[randomDrink].strDrinkThumb;
  const strInstructions = data.getAllDrinks[randomDrink].strInstructions;
  const strGlass = data.getAllDrinks[randomDrink].strGlass;
  const ingredientsDrink: string[][] = []


    const ingredients = [];
    for (let i = 1; i <= 10; i++) {
      const ingredient = data.getAllDrinks[randomDrink][`strIngredient${i}`];
      let measurement = data.getAllDrinks[randomDrink][`strMeasure${i}`];
      if (measurement == null){
        measurement = ""
      }
      if (ingredient) {
        ingredients.push(measurement+  " "+ ingredient);
      }
    }
    ingredientsDrink.push(ingredients);

  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"cocktail image"}
            src={
              IMAGE
            }
            objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading color={"beige"}>
            {strDrink}
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            ingredients
          </Text>
          <Stack spacing={4}>
            
            {
              ingredientsDrink.map((ingredient) => (
                ingredient.map((ing) => (
                  <Text color={"white"} fontSize={"lg"}>
                    {ing}
                  </Text>
                ))
              ))
            }
          </Stack>
            
        </Stack>
      </SimpleGrid>
      <Stack marginTop={"20px"}>
        <Text
          textTransform={"uppercase"}
          fontSize={"20px"}
          color={"beige"}
          marginBottom={"10px"}
        >
        </Text>
        <Text color={"beige"}>Glass: {strGlass}</Text>
        <Text color={"gray.500"}>Recipe</Text>
        <Text color={"white"}>{strInstructions}</Text>
      </Stack>
    </Container>
  );


}