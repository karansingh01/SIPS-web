import { Container, Flex, Heading, Image, SimpleGrid, Stack, StackDivider, Text, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { client } from '../../api/client';
import { RandomDrinkQuery } from '../../api/graphql/randomDrink';



export default function CocktailDetails() {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [drinkIngredients, setDrinkIngredient] = useState(['']);
  const [glass, setGlass] = useState('');
  

  useEffect(() => {
    client.query({
      query: RandomDrinkQuery
    }).then((result) => {
      console.log(result);
      const drink = result.data.randomDrink.drinks[0];
      setName(drink.strDrink);
      setDescription(drink.strInstructions);
      setImageUrl(drink.strDrinkThumb);
      setGlass(drink.strGlass);

      const ingredients = [];
      for (let i = 1; i <= 10; i++) {
        const ingredient = drink[`strIngredient${i}`];
        const measurement = drink[`strMeasure${i}`];
        if (ingredient) {
          ingredients.push(measurement+  " "+ ingredient);
        }
      }

      setDrinkIngredient(ingredients);
    });
  }, []);


/*   let ingredientsCon = document.querySelector(".ingredients");
  ingredients.forEach(element => {
    let item =document.createElement("li");
    item.innerText = element;
    ingredientsCon?.appendChild(item);
  }); */


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
            {
              drinkIngredients.map((ingredient, index) => {
                return (
                  <Text key={index} color={"#e0f7fa"} fontSize={"lg"}>
                    {ingredient}
                  </Text>
                )
              }
            )}
            <ul className="ingredients">                
            </ul>

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
        <Text color={"beige"}>Glass: {glass}</Text>
        <Text color={"gray.500"}>Recipe</Text>
        <Text color={"white"}>{description}</Text>
      </Stack>
    </Container>
  );
}