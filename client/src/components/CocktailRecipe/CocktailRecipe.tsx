import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";
import "./CocktailRecipe.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

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

export default function CocktailDetails() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"cocktail image"}
            src={
              "https://www.liquor.com/thmb/fO-COKLw_iEA28v8K4XQjzMhkfw=/735x0/very-sexy-martini-720x720-primary-b1212ebf73f54f898a56f7f0b60c0a34.jpg"
            }
            objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading /* textTransform={"uppercase"} */ color={"beige"}>
            Raspberry Spritz
          </Heading>
          <FaHeart color={"lightpink"} />
          <Text color={"gray.500"} fontSize={"lg"}>
            ingredients
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Text color={"beige"}>4oz liquor</Text>
            <Text color={"beige"}>1 lime</Text>
            <Text color={"beige"}>12oz tonic water</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Stack marginTop={"20px"}>
        <Text
          textTransform={"uppercase"}
          fontSize={"20px"}
          color={"beige"}
          marginBottom={"10px"}
        >
          How I'm made...
        </Text>
        <Text color={"gray.500"}>Fremgangsmåte her</Text>
      </Stack>
    </Container>
  );
}
