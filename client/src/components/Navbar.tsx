import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
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

  // For checking if user is logged in or not
  let navigate = useNavigate();
  const { user, logout } = useContext<{
    user: any;
    login: (userData: any) => void;
    logout: () => void;
  }>(AuthContext);

  const onLogout = () => {
    logout();
    navigate("/");
  };

  const onLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Box backgroundColor={"transparent"} px={10} id={"navbar"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <RouterLink to="/">
            <Box
              color={"beige"}
              fontSize={"60px"}
              fontWeight={"bold"}
              id={"logo"}
              marginTop={5}
            >
              {TITLE}
            </Box>
          </RouterLink>

          <Flex id={"idButton"} alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  marginTop={5}
                >
                  <Avatar
                    size={"md"}
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

                  {/* if user is logged in, show email, if not show Guest */}
                  {user ? (
                    <Center>
                      <p>{user.email}</p>
                    </Center>
                  ) : (
                    <Center>
                      <p>Guest</p>
                    </Center>
                  )}
                  <br />
                  <MenuDivider />

                  {/* if user exists, show logout button */}
                  {user ? (
                    <MenuItem onClick={onLogout}>Logout</MenuItem>
                  ) : (
                    <MenuItem onClick={onLogin}>Login</MenuItem>
                  )}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
