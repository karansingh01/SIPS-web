import {
    Box,
    Center,
    useColorModeValue,
    Text,
    Stack,
    Image,
    Container
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import {FaRegHeart, FaHeart} from "react-icons/fa";
  
  
  export default function CocktailCard({cocktail}:{cocktail : {id : number, name : string, description  :string, favorite : boolean, image : string }}) {
    const IMAGE = cocktail.image;
    let name : string = cocktail.name
    let description : string = cocktail.description
    let favorite : boolean = cocktail.favorite

    /**
     * toggler favoritt-knapp (ikke faktisk logikk så langt obv)
     */
    const [isFav, setFav] = useState(favorite); 
    const toggleFav = () => {
      setFav(!isFav);
      cocktail.favorite = isFav;
   };
  
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          rounded={15}
          bg={useColorModeValue('#f7f0e9', 'gray.800')}
          borderColor={'beige'} 
          pos={'relative'}>
            <Stack style={{flexDirection: 'row-reverse'}} marginBottom={-20}> 
            {isFav ?  <FaHeart color={'lightpink'} size={20} onClick={toggleFav} /> : <FaRegHeart color={'lightpink'} size={20} onClick={toggleFav}/>}
            </Stack>
            <Stack pt={20} align={'center'} marginBottom={10} marginTop={0}> 
                <Text color={'gray.500'} fontSize={'lg'} textTransform={'uppercase'} >
                {name}
                </Text> 
            </Stack>
          <Box
          alignContent={'center'}
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
            }} */>
            <Image
              rounded={15}
              height={230}
              width={282}
              objectFit={'cover'}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} >
            <Container maxW='270px' textAlign={'center'} fontSize={'15px'} fontFamily={'body'} fontWeight={100}>
               {description.slice(0, 20)}
               {description[21] ? "..." : null}
             </Container>
              <Text textTransform={'uppercase'} fontSize={'10px'} color={'gray.300'} textAlign={'right'} marginBottom={'10px'}>
                How I'm made...
              </Text>

          </Stack>
        </Box>
      </Center>
    );
  }