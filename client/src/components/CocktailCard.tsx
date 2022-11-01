import { Box, Center, Container, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';

export default function CocktailCard({
  cocktail,
}: {
  cocktail: {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
  };
}) {
  const IMAGE = cocktail.strDrinkThumb;
  let name: string = cocktail.strDrink;

  return (
    <Center py={12}>
      <Box
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
