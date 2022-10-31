import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { useForm } from '../hooks/nameToValue';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'graphql-tag';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';

const REGISTER_USER = gql`
    mutation Mutation (
        $registerInput: RegisterInput
    ) {
        registerUser(
            registerInput: $registerInput
        ){
            email
            username
            token
        }
    }
`;

export default function Register(props: any){
  const context = useContext(AuthContext);
  let navigate = useNavigate();

  const gotoLogin = () => {
    navigate("/login");
  };

  // The error array. Any errors will be pushed to this array.
  // We use <any> here because it doesn't matter as it will only get errors anyways.
  const [errors, setErrors] = useState<any>([]);

  // Enables us to show and hide password.
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  
  // Fires the mutation REGISTER_USER, defined below.
  function registerUserCallback(){
      registerUser();
  }

    // Decides what is sent to the server.
    const { onChange, onSubmit, values } = useForm(registerUserCallback, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [registerUser] = useMutation(REGISTER_USER, {
        update(proxy: any, {data : {registerUser: userData}}: any){
            context.login(userData);
            navigate('/');
        },
        
        // Sets errors in an array. If there are no errors, then the errors array will be empty.
        // The errors array is displayed in the UI if there are any errors to display.
        onError({graphQLErrors, networkError}: any){
            console.log(graphQLErrors);
            console.log(JSON.stringify(networkError, null, 2));
            setErrors(graphQLErrors);
        },
        variables: {registerInput: values},
    });

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Register your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to access all of our amazing drink recipes ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl isRequired id="username">
                <FormLabel>Username</FormLabel>
                <Input type="Username" aria-label='username' name="username" onChange={onChange} />
              </FormControl>
              <FormControl isRequired id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="Email" name="email" aria-label='email' onChange={onChange}/>
              </FormControl>
              <FormControl isRequired id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input type={show ? 'text' : 'password'} name="password" aria-label='password' onChange={onChange} />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}</Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl isRequired id="confirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size="md">
                  <Input type={show ? 'text' : 'password'} name="confirmPassword" aria-label='confirmPassword' onChange={onChange} />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}</Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Link onClick={gotoLogin} color={'blue.400'}>Already have an account?</Link>
                </Stack>
                <Button
                  onClick={onSubmit}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Register
                </Button>
                {errors.map(function(error: any){ // shows error on the page
                  return (
                    <Alert status="error">
                      <AlertIcon />
                      {error.message}
                    </Alert>
                  )
                })};
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
}