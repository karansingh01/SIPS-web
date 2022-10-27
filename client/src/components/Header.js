"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const bi_1 = require("react-icons/bi");
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("./Navbar/Navbar"));
function Header() {
    const IMAGE = "https://kaffegeek.no/wp-content/uploads/2020/09/cocktail-slow-martini-COLOURBOX47366209-843x445.jpg";
    const TITLE = "SIPS";
    const text = "Sit down, relax and pour yourself a drink";
    /**
       * For å hente ut random drink (må nok endres noe på ift. hvordan vi setter id på cocktail):
       * const [randomCocktail, setRandomCocktail] = useState(null)
       *
       * const getRandomCocktail = () => {
          const randomCocktail = Math.floor(Math.random() * cocktails.length);
          setRandomCocktail(randomCocktail)
          };
       */
    return (<react_1.Box 
    /**
     * Bakgrunnsbilde som boks, med knapper, tittel og beskrivelse over
     */
    key={1} height={"2xl"} position="relative" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${IMAGE})`}>
      <Navbar_1.default />
      <react_1.Stack style={{ flexDirection: "row-reverse" }} marginTop={"30px"} marginRight={"30px"}></react_1.Stack>
      <react_1.Container height="600px" position="relative" marginLeft={25}>
        <react_1.Stack 
    /*
          mulig vi trenger disse senere:
          spacing={150}
          w={'full'}*/
    maxW={"xs"} position="absolute" marginTop={"-50px"}>
          <react_1.Text marginTop={150} fontSize={"15px"} color={"grey"}>
            {text}
          </react_1.Text>
          {/*
              Button skal sende til en tilfeldig CocktailRecipe (har satt Link for lenke her, usikker på hva som er mest hensiktsmessig for oss):
              <Link to='/{randomCocktail.id}'>
              <Button size={'md'} leftIcon={<BiDrink color={'lightpink'} size={20}/>}  color={'beige'} variant={'outline'}>
              Mix me a drink!
              </Button>
              </Link>
              */}
          <react_router_dom_1.Link to="/cr">
            <react_1.Button size={"md"} leftIcon={<bi_1.BiDrink color={"lightpink"} size={20}/>} color={"beige"} variant={"outline"} /* maxWidth={'150px'} */>
              Mix me a drink!
            </react_1.Button>
          </react_router_dom_1.Link>
        </react_1.Stack>
      </react_1.Container>
    </react_1.Box>);
}
exports.default = Header;
