"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
const fa_1 = require("react-icons/fa");
function CocktailCard({ cocktail, }) {
    const IMAGE = cocktail.image;
    let name = cocktail.name;
    let description = cocktail.description;
    let favorite = cocktail.favorite;
    /**
     * toggler favoritt-knapp (ikke faktisk logikk så langt obv)
     */
    const [isFav, setFav] = (0, react_2.useState)(favorite);
    const toggleFav = () => {
        setFav(!isFav);
        cocktail.favorite = isFav;
    };
    return (<react_1.Center py={12}>
      <react_1.Box role={"group"} p={6} maxW={"330px"} w={"full"} rounded={15} bg={(0, react_1.useColorModeValue)("#f7f0e9", "gray.800")} borderColor={"beige"} pos={"relative"}>
        <react_1.Stack style={{ flexDirection: "row-reverse" }} marginBottom={-20}>
          {isFav ? (<fa_1.FaHeart color={"lightpink"} size={20} onClick={toggleFav}/>) : (<fa_1.FaRegHeart color={"lightpink"} size={20} onClick={toggleFav}/>)}
        </react_1.Stack>
        <react_1.Stack pt={20} align={"center"} marginBottom={10} marginTop={0}>
          <react_1.Text color={"gray.500"} fontSize={"lg"} textTransform={"uppercase"}>
            {name}
          </react_1.Text>
        </react_1.Stack>
        <react_1.Box alignContent={"center"}>
          <react_1.Image rounded={15} height={230} width={282} objectFit={"cover"} src={IMAGE}/>
        </react_1.Box>
        <react_1.Stack pt={10}>
          <react_1.Container maxW="270px" textAlign={"center"} fontSize={"15px"} fontFamily={"body"} fontWeight={100}>
            {description.slice(0, 20)}
            {description[21] ? "..." : null}
          </react_1.Container>
          <react_1.Text textTransform={"uppercase"} fontSize={"10px"} color={"gray.300"} textAlign={"right"} marginBottom={"10px"}>
            How I'm made...
          </react_1.Text>
        </react_1.Stack>
      </react_1.Box>
    </react_1.Center>);
}
exports.default = CocktailCard;
