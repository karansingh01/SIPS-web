import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";

export default function CocktailCard({
  cocktail,
}: {
  cocktail: {
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
    strInstructions: string;
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
  };
}) {
  const IMAGE: string = cocktail.strDrinkThumb;
  const name: string = cocktail.strDrink;
  const strGlass: string = cocktail.strGlass;
  let strIngredient1: string = cocktail.strIngredient1;
  let strIngredient2: string = cocktail.strIngredient2;
  let strIngredient3: string = cocktail.strIngredient3;
  let strIngredient4: string = cocktail.strIngredient4;
  let strIngredient5: string = cocktail.strIngredient5;
  let strIngredient6: string = cocktail.strIngredient6;
  let strIngredient7: string = cocktail.strIngredient7;
  let strIngredient8: string = cocktail.strIngredient8;
  let strIngredient9: string = cocktail.strIngredient9;
  let strIngredient10: string = cocktail.strIngredient10;
  let strInstructions: string = cocktail.strInstructions;
  let strMeasure1: string = cocktail.strMeasure1;
  let strMeasure2: string = cocktail.strMeasure2;
  let strMeasure3: string = cocktail.strMeasure3;
  let strMeasure4: string = cocktail.strMeasure4;
  let strMeasure5: string = cocktail.strMeasure5;
  let strMeasure6: string = cocktail.strMeasure6;
  let strMeasure7: string = cocktail.strMeasure7;
  let strMeasure8: string = cocktail.strMeasure8;
  let strMeasure9: string = cocktail.strMeasure9;
  let strMeasure10: string = cocktail.strMeasure10;



  const drinkIngredients = [
    strMeasure1 + strIngredient1,
    strMeasure2 + strIngredient2,
    strMeasure3 + strIngredient3,
    strMeasure4 + strIngredient4,
    strMeasure5 + strIngredient5,
    strMeasure6 + strIngredient6,
    strMeasure7 + strIngredient7,
    strMeasure8 + strIngredient8,
    strMeasure9 + strIngredient9,
    strMeasure10 + strIngredient10,
  ];





  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Center py={8} px={4}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color={"#251B1C"}>{name}</ModalHeader>
              <ModalCloseButton className={"buttonCloseCocktailCard"} />
              <ModalBody>
                <Image
                  rounded={"md"}
                  src={IMAGE}
                  alt={name}
                  objectFit={"cover"}
                />
                <Stack spacing={4}>
                  <Heading color={"#251B1C"}>{name}</Heading>
                  <Text
                    id={"ingredientsText"}
                    color={"gray.500"}
                    fontSize={"lg"}
                  >
                    Ingredients
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
                      // Removes null and undefined values from array
                      // so stackdivider wont make too many lines
                      drinkIngredients
                        .filter((n) => n)
                        .map((ingredient, index) => {
                          return (
                            <Text key={index} color={"black"} fontSize={"lg"}>
                              {ingredient}
                            </Text>
                          );
                        })
                    }
                    <ul className="ingredients"></ul>
                  </Stack>
                </Stack>
                <Stack marginBottom={"20px"}>
                  <Text color={"gray.500"} fontSize={"lg"}>
                    Recipe
                  </Text>
                  <Text color={"black"} fontSize={"lg"}>
                    {strInstructions}
                  </Text>
                  <Text color={"gray.500"} fontSize={"lg"}>
                    Glass: {strGlass}
                  </Text>
                </Stack>
              </ModalBody>
            </ModalContent>
          </Flex>
        </SimpleGrid>
      </Modal>

      <Box
        onClick={onOpen}
        as="button"
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        rounded={15}
        bg={useColorModeValue("#f7f0e9", "gray.800")}
        borderColor={"beige"}
        pos={"relative"}
      >
        <Stack pt={20} align={"center"} marginBottom={10} marginTop={0}>
          <Text color={"#251B1C"} fontSize={"lg"} textTransform={"uppercase"}>
            {name}
          </Text>
        </Stack>
        <Box
          alignContent={"center"}
        >
          <Image
            rounded={15}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10}>
          <Text
            textTransform={"uppercase"}
            fontSize={"10px"}
            color={"#251B1C"}
            textAlign={"right"}
            marginBottom={"10px"}
          >
            Click on me...
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
