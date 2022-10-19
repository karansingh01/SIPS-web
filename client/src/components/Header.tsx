import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Textarea,
    Stack,
    Image,
    Container,
    Button
  } from '@chakra-ui/react';
  import {FaHeart} from "react-icons/fa";

export default function Header(){

    const IMAGE : string = 'https://kaffegeek.no/wp-content/uploads/2020/09/cocktail-slow-martini-COLOURBOX47366209-843x445.jpg';
    const TITLE : string = 'SIPS';
    const text : string = 'Sit down, relax, pour a drink or two';

    return(
/*         <Center py={12}>
            <Box
                backgroundImage={IMAGE}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                />
            <Text> halla </Text> 
        </Center> */
        <Box
            key={1}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${IMAGE})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Stack style={{flexDirection: 'row-reverse'}} marginTop={'20px'} marginRight={'20px'}> 
            <Button leftIcon={<FaHeart color={'lightpink'} size={20}/>} borderColor={'beige'} variant={'outline'}>
                My favorite drinks
            </Button> </Stack>
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={100}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                marginTop={30} 
                marginLeft={100}>
                <Heading color={'beige'} fontSize={'40px'}>
                  {TITLE}
                </Heading>
                <Text fontSize={'15px'} color={'grey'}>
                  {text}
                </Text>
              </Stack>
            </Container>
          </Box>
      

    )
}