"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("@chakra-ui/react");
const fa_1 = require("react-icons/fa");
require("./Navbar.css");
const TITLE = "SIPS";
const BUTTONTEXT = "Favorites";
const NavLink = ({ children }) => (<react_1.Link px={2} py={1} rounded={"md"} _hover={{
        textDecoration: "none",
    }} href={"#"}>
    {children}
  </react_1.Link>);
function Navbar() {
    const { colorMode, toggleColorMode } = (0, react_1.useColorMode)();
    const { isOpen, onOpen, onClose } = (0, react_1.useDisclosure)();
    return (<>
      <react_1.Box backgroundColor={"transparent"} px={10}>
        <react_1.Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <react_router_dom_1.Link to="/">
            <react_1.Box color={"beige"} fontSize={"60px"} fontWeight={"bold"}>
              {TITLE}
            </react_1.Box>
          </react_router_dom_1.Link>

          <react_1.Flex alignItems={"center"}>
            <react_1.Stack direction={"row"} spacing={7}>
              <react_router_dom_1.Link to="/fav">
                <react_1.Button backgroundColor={"transparent"} color={"beige"} leftIcon={<fa_1.FaHeart color={"lightpink"} size={18}/>} variant={"outline"}>
                  {BUTTONTEXT}
                </react_1.Button>
              </react_router_dom_1.Link>

              <react_1.Menu>
                <react_1.MenuButton as={react_1.Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                  <react_1.Avatar size={"sm"} src={"https://i.pinimg.com/originals/c6/ce/f6/c6cef63923ff0193948c75c7807eda89.jpg"}/>
                </react_1.MenuButton>
                <react_1.MenuList alignItems={"center"}>
                  <br />
                  <react_1.Center>
                    <react_1.Avatar size={"2xl"} src={"https://i.pinimg.com/originals/c6/ce/f6/c6cef63923ff0193948c75c7807eda89.jpg"}/>
                  </react_1.Center>
                  <br />
                  <react_1.Center>
                    <p>Username</p>
                  </react_1.Center>
                  <br />
                  <react_1.MenuDivider />

                  <react_1.MenuItem>Logout</react_1.MenuItem>
                </react_1.MenuList>
              </react_1.Menu>
            </react_1.Stack>
          </react_1.Flex>
        </react_1.Flex>
      </react_1.Box>
    </>);
}
exports.default = Navbar;
