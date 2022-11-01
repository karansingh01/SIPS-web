import { Box,
  Center,
  Container,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  Flex,
  Heading,
  SimpleGrid,
  StackDivider } from '@chakra-ui/react';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from 'react';


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
  };
}) {
  
  const IMAGE: string = cocktail.strDrinkThumb;
  const name: string = cocktail.strDrink;
  const strGlass: string = cocktail.strGlass;
  const strIngredient1: string = cocktail.strIngredient1;
  const strIngredient2: string = cocktail.strIngredient2;
  const strIngredient3: string = cocktail.strIngredient3;
  const strIngredient4: string = cocktail.strIngredient4;
  const strIngredient5: string = cocktail.strIngredient5;
  const strIngredient6: string = cocktail.strIngredient6;
  const strIngredient7: string = cocktail.strIngredient7;
  const strIngredient8: string = cocktail.strIngredient8;
  const strIngredient9: string = cocktail.strIngredient9;
  const strIngredient10: string = cocktail.strIngredient10;
  const strInstructions: string = cocktail.strInstructions;

  const drinkIngredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10];

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Center py={12}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
          <Flex> 
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color={"brown"}>{name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image rounded={"md"} src={IMAGE} alt={name} objectFit={"cover"} />
                <Stack spacing={4}>
                  <Heading color={"brown"}>{name}</Heading>
                  <Text color={"gray.500"} fontSize={"lg"}>
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
                    drinkIngredients.filter((n) => n).map((ingredient, index) => {
                      return (
                        <Text key={index} color={"black"} fontSize={"lg"}>
                          {ingredient}
                        </Text>
                      )
                    }
                    )}
                    <ul className="ingredients">
                    </ul>
                  </Stack>
                </Stack>
                <Stack marginBottom={"20px"}>
                <Text color={"gray.500"} fontSize={"lg"}>Recipe</Text>
                <Text color={"black"}>{strInstructions}</Text>
                <Text color={"brown"}>Glass: {strGlass}</Text>
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
          <Text color={"gray.500"} fontSize={"lg"} textTransform={"uppercase"}>
            {name}
          </Text>
        </Stack>
        <Box
          alignContent={"center"}
          /* boxShadow={'base'} */
          /**
           * Her er det mye hentet fra chakra. Tror det er for mobil-versjon, men usikker?
           */
          /* marginTop={'20px'}
            mt={-12}
            pos={'relative'}
            color={'red'}
            borderRadius={'full'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`, 
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }} */
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
            color={"gray.300"}
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
