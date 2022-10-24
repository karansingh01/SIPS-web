import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import "./Navbar.css";

const TITLE: string = "SIPS";
const BUTTONTEXT: string = "Favorites";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box backgroundColor={"transparent"} px={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <RouterLink to="/">
            <Box color={"beige"} fontSize={"60px"} fontWeight={"bold"}>
              {TITLE}
            </Box>
          </RouterLink>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <RouterLink to="/fav">
                <Button
                  backgroundColor={"transparent"}
                  color={"beige"}
                  leftIcon={<FaHeart color={"lightpink"} size={18} />}
                  variant={"outline"}
                >
                  {BUTTONTEXT}
                </Button>
              </RouterLink>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://i.pinimg.com/originals/c6/ce/f6/c6cef63923ff0193948c75c7807eda89.jpg"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://i.pinimg.com/originals/c6/ce/f6/c6cef63923ff0193948c75c7807eda89.jpg"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />

                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
