import { Container, Flex, Heading, Image, SimpleGrid, Stack, StackDivider, Text, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { client } from '../../api/client';
import { RandomDrinkQuery } from '../../api/graphql/randomDrink';
import { AlcoholicDrinkQuery } from "../../api/graphql/alcoholicDrinks";
import { NonAlcoholicDrinkQuery } from "../../api/graphql/nonAlcoholicDrinks";



export default function CocktailDetails() {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [drinkIngredients, setDrinkIngredient] = useState(['']);
  const [glass, setGlass] = useState('');
  
/* setName(drinkName);
 */
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"cocktail image"}
            src={
              imageUrl
            }
            objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading /* textTransform={"uppercase"} */ color={"beige"}>
            {name}
          </Heading>
          <FaHeart color={"lightpink"} />
          <Text color={"gray.500"} fontSize={"lg"}>
            ingredients
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
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
      </Stack>
    </Container>
  );
}