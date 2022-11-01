import { useMutation } from "@apollo/react-hooks";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { gql } from "graphql-tag";
import { useContext, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/authContext";
import { useForm } from "../hooks/nameToValue";

const LOGIN_USER = gql`
  mutation Mutation($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      email
      username
      token
    }
  }
`;

export default function LoginPage(props: any) {
  let navigate = useNavigate();
  const context = useContext(AuthContext);

  const gotoRegister = () => {
    navigate("/register");
  };

  // The error array. Any errors will be pushed to this array.
  // We use <any> here because it doesn't matter as it will only get errors anyways.
  const [errors, setErrors] = useState<any>([]);

  // Enables us to show and hide password.
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  function loginUserCallback() {
    loginUser();
  }

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
    password: "",
  });

  const [loginUser] = useMutation(LOGIN_USER, {
    update(proxy: any, { data: { loginUser: userData } }: any) {
      context.login(userData);
      navigate("/");
    },

    // Sets errors in an array. If there are no errors, then the errors array will be empty.
    // The errors array is displayed in the UI if there are any errors to display.
    onError({ graphQLErrors, networkError }: any) {
      console.log(graphQLErrors);
      console.log(JSON.stringify(networkError, null, 2));
      setErrors(graphQLErrors);
    },
    variables: { loginInput: values },
  });
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      id={"loginPage"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading id={"loginHeader"} fontSize={"4xl"}>
            Login to your account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to access all of our amazing drink recipes ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl isRequired id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                aria-label="email"
                onChange={onChange}
              />
            </FormControl>
            <FormControl isRequired id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  name="password"
                  aria-label="password"
                  onChange={onChange}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link onClick={gotoRegister} color={"blue.400"}>
                  Not registered?
                </Link>
              </Stack>
              <Button
                onClick={onSubmit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Login
              </Button>
              {errors.map(function (error: any) {
                // shows error on the page
                return (
                  <Alert status="error">
                    <AlertIcon />
                    {error.message}
                  </Alert>
                );
              })}
              ;
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
