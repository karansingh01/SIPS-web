import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement, useEffect, useState } from "react";
import "./CocktailRecipe.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { client } from '../../api/client';
import { RandomDrinkQuery } from '../../api/graphql/randomDrink';
import { log } from "console";




export default function CocktailDetails() {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [drinkIngredients, setIngredient] = useState('[]');
  const [glass, setGlass] = useState('[]');
  
  let ingredients: string[] = [];


  client.query({ query: RandomDrinkQuery }).then(response => {
    const link = response.data.randomDrink.drinks[0];
    console.log(link);
    setName(link.strDrink);
    setDescription(link.strInstructions);
    setImageUrl(link.strDrinkThumb);
    setIngredient(link.strMeasure1 + link.strIngredient1)
    setGlass(link.strGlass)

    let count = 1;
    for (let i in link){
      let ingredient = ""
      let measurment = ""
      if (i.startsWith("strIngredient") && link[i]){
        ingredient = link[i];
        if (link['strMeasure'+ count]){
          measurment = link['strMeasure' + count];
        } else {
          measurment = "";
        }
        count +=1;
        ingredients.push(`${measurment} ${ingredient}`);
/*         setIngredient(`${measurment} ${ingredient}`)
 */        
      }
    
      let ingredientsCon = document.querySelector(".ingredients");
      ingredients.forEach(element => {
        let item =document.createElement("li");
        item.innerText = element;
        ingredientsCon?.appendChild(item);
      });
    
      console.log(ingredients);
      
    }


  

  }
  );

/*   console.log(drinkIngredients);
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
            <Text color={"beige"}>1 lime</Text>
            <Text color={"beige"}>12oz tonic water</Text>
            <ul className="ingredients">  
            <Text color={"white"}>{ingredients}</Text>
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

/* interface CocktailRecipe {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: CocktailRecipe) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
}; */
