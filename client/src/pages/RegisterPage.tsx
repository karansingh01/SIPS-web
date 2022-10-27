import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { useForm } from '../hooks/nameToValue';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'graphql-tag';
import { useNavigate } from 'react-router-dom';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

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
  
  function registerUserCallback(){
      console.log("Callback hit.");
      registerUser();
  }
    const { onChange, onSubmit, values } = useForm(registerUserCallback, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [registerUser, { loading }] = useMutation(REGISTER_USER, {
        update(proxy, {data : {registerUser: userData}}){
            context.login(userData);
            navigate('/');
        },
        onError(err){
            console.log(err);
        },
        variables: {registerInput: values},
    })
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
              <FormControl id="email">
                <FormLabel>Username</FormLabel>
                <Input type="username" name="username" onChange={onChange} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={onChange}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" onChange={onChange} />
              </FormControl>
              <FormControl id="confirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <Input type="confirmPassword" name="confirmPassword" onChange={onChange} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Link color={'blue.400'}>Already have an account?</Link>
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
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
}