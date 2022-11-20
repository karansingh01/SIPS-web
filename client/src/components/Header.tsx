import { Box, Text, Stack, Container, Button } from "@chakra-ui/react";
import { BiDrink } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  const IMAGE: string =
    "https://kaffegeek.no/wp-content/uploads/2020/09/cocktail-slow-martini-COLOURBOX47366209-843x445.jpg";
  const TITLE: string = "SIPS";
  const text: string = "Sit down, relax and pour yourself a drink";

  /**
     * For å hente ut random drink (må nok endres noe på ift. hvordan vi setter id på cocktail):
     * const [randomCocktail, setRandomCocktail] = useState(null)
     * 
     * const getRandomCocktail = () => {
        const randomCocktail = Math.floor(Math.random() * cocktails.length);
        setRandomCocktail(randomCocktail)
        };
     */

  return (
    <Box
      /**
       * Bakgrunnsbilde som boks, med knapper, tittel og beskrivelse over
       */
      id={"header"}
      key={1}
      height={"2xl"}
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(${IMAGE})`}
    >
      <Navbar />
      <Stack
        style={{ flexDirection: "row-reverse" }}
        marginTop={"30px"}
        marginRight={"30px"}
      />
      <Container
        height="600px"
        position="relative"
        marginLeft={30}
        marginRight={30}
      >
        <Stack maxW={"xs"} position="absolute" marginTop={"-50px"}>
          <Text marginTop={150} fontSize={"l"} color={"lightpink"}>
            {text}
          </Text>
          <Link to="/cr">
            <Button
              size={"md"}
              leftIcon={<BiDrink color={"lightpink"} size={20} />}
              color={"beige"}
              variant={"outline"} /* maxWidth={'150px'} */
            >
              Mix a random drink!
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
