import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Textarea,
    Stack,
    Image,
    HStack,
    IconButton,
    Container
  } from '@chakra-ui/react';
  import {FaRegHeart, FaHeart} from "react-icons/fa";
  
  /* const IMAGE =
    'https://www.liquor.com/thmb/fO-COKLw_iEA28v8K4XQjzMhkfw=/735x0/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg';
   */
  export default function CocktailCard({name, description, favorite, image}:{name: string; description: string; favorite: boolean, image: string}) {
    const IMAGE = image;

    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          rounded={15}
          bg={useColorModeValue('lightyellow', 'gray.800')}
          pos={'relative'}>
            <Stack style={{flexDirection: 'row-reverse'}}> 
            {favorite ?  <FaHeart color={'lightpink'} size={20} /> : <FaRegHeart color={'lightpink'} size={20} />}
            </Stack>
            <Stack pt={20} align={'center'} marginBottom={10} marginTop={0}> 
                <Text color={'gray.500'} fontSize={'15px'}/*FontSize med størrekser (sm, lg, xl, ..) funker ikke */ textTransform={'uppercase'} >
                {name}
                </Text> 
            </Stack>
          <Box
          alignContent={'center'}
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
              {description} {/* blablablablabla blabalablabla blablabla eruygierguouerwg ergag aegrgeg aergeargregegrag */}
            </Container>
              <Text textTransform={'uppercase'} fontSize={'10px'} color={'gray.300'} textAlign={'right'} marginBottom={'10px'}>
                How I'm made...
              </Text>

          </Stack>
        </Box>
      </Center>
    );
  }