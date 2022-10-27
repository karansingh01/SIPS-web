"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
require("./CocktailRecipe.css");
const fa_1 = require("react-icons/fa");
/* interface CocktailRecipe {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: CocktailRecipe) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
}; */
function CocktailDetails() {
    return (<react_1.Container maxW={"5xl"} py={12}>
      <react_1.SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <react_1.Flex>
          <react_1.Image rounded={"md"} alt={"cocktail image"} src={"https://www.liquor.com/thmb/fO-COKLw_iEA28v8K4XQjzMhkfw=/735x0/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg"} objectFit={"cover"}/>
        </react_1.Flex>
        <react_1.Stack spacing={4}>
          <react_1.Heading /* textTransform={"uppercase"} */ color={"beige"}>
            Raspberry Spritz
          </react_1.Heading>
          <fa_1.FaHeart color={"lightpink"}/>
          <react_1.Text color={"gray.500"} fontSize={"lg"}>
            ingredients
          </react_1.Text>
          <react_1.Stack spacing={4} divider={<react_1.StackDivider borderColor={(0, react_1.useColorModeValue)("gray.100", "gray.700")}/>}>
            <react_1.Text color={"beige"}>4oz liquor</react_1.Text>
            <react_1.Text color={"beige"}>1 lime</react_1.Text>
            <react_1.Text color={"beige"}>12oz tonic water</react_1.Text>
          </react_1.Stack>
        </react_1.Stack>
      </react_1.SimpleGrid>
      <react_1.Stack marginTop={"20px"}>
        <react_1.Text textTransform={"uppercase"} fontSize={"20px"} color={"beige"} marginBottom={"10px"}>
          How I'm made...
        </react_1.Text>
        <react_1.Text color={"gray.500"}>Fremgangsmåte her</react_1.Text>
      </react_1.Stack>
    </react_1.Container>);
}
exports.default = CocktailDetails;
