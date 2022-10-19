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

    /**
     * For å hente ut random drink (må nok endres noe på ift. hvordan vi setter id på cocktail):
     * const [randomCocktail, setRandomCocktail] = useState(null)
     * 
     * const getRandomCocktail = () => {
        const randomCocktail = Math.floor(Math.random() * cocktails.length);
        setRandomCocktail(randomCocktail)
        };
     */

    return(

        <Box
            /**
             * Bakgrunnsbilde som boks, med knapper, tittel og beskrivelse over
             */
            key={1}
            height={'2xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${IMAGE})`}>
            <Stack style={{flexDirection: 'row-reverse'}} marginTop={'30px'} marginRight={'30px'}> 
            <Button leftIcon={<FaHeart color={'lightpink'} size={20}/>}  color={'beige'} variant={'outline'}>
                My favorite drinks
            </Button> </Stack>
            <Container height="600px" position="relative" marginLeft={25}>
              <Stack
                /* 
                mulig vi trenger disse senere:
                spacing={150}
                w={'full'}*/
                maxW={'xs'} 
                position="absolute"
                marginTop={'-50px'} >
                <Heading color={'beige'} fontSize={'40px'} marginBottom={150}>
                  {TITLE}
                </Heading>
                <Text fontSize={'15px'} color={'grey'}>
                  {text}
                </Text>
                {/* 
                Button skal sende til en tilfeldig CocktailRecipe (har satt Link for lenke her, usikker på hva som er mest hensiktsmessig for oss): 
                <Link to='/{randomCocktail.id}'> 
                <Button size={'md'} leftIcon={<BiDrink color={'lightpink'} size={20}/>}  color={'beige'} variant={'outline'}>
                Mix me a drink!
                </Button>
                </Link>
                */}
                <Button size={'md'} leftIcon={<BiDrink color={'lightpink'} size={20}/>}  color={'beige'} variant={'outline'} /* maxWidth={'150px'} */>
                Mix me a drink!
            </Button> 
              </Stack>
            </Container>
          </Box>
      

    )
}