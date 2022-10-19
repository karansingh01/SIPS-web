import {
    Box,
    Heading,
    Text,
    Stack,
    Container,
    Button
  } from '@chakra-ui/react';
  import {FaHeart} from "react-icons/fa";
  import {BiDrink} from "react-icons/bi";


export default function Header(){

    const IMAGE : string = 'https://kaffegeek.no/wp-content/uploads/2020/09/cocktail-slow-martini-COLOURBOX47366209-843x445.jpg';
    const TITLE : string = 'SIPS';
    const text : string = 'Sit down, relax and pour yourself a drink';

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
            height={'2xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${IMAGE})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Stack style={{flexDirection: 'row-reverse'}} marginTop={'30px'} marginRight={'30px'}> 
            <Button leftIcon={<FaHeart color={'lightpink'} size={20}/>}  color={'beige'} variant={'outline'}>
                My favorite drinks
            </Button> </Stack>
            <Container /* size="container.lg" */ height="600px" position="relative" marginLeft={25}>
              <Stack
                /* spacing={150} */
               /*  w={'full'}*/
                maxW={'xs'} 
                position="absolute"
                marginTop={'-50px'} 
                /* marginLeft={-25} */>
                <Heading color={'beige'} fontSize={'40px'} marginBottom={150}>
                  {TITLE}
                </Heading>
                <Text fontSize={'15px'} color={'grey'}>
                  {text}
                </Text>
                <Button size={'md'} leftIcon={<BiDrink color={'lightpink'} size={20}/>}  color={'beige'} variant={'outline'} /* maxWidth={'150px'} */>
                Mix me a drink!
            </Button> 
              </Stack>
            </Container>
          </Box>
      

    )
}