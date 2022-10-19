import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { useQuery, gql } from '@apollo/client';
import AllCocktailsPage from './pages/AllCocktailsPage';
import TestPage from './pages/TestPage';
import { HashRouter, Route, Routes } from 'react-router-dom';


const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

/* function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}
 */
export default function App() {
  return (

    <ChakraProvider>
      {/* <div><AllCocktailsPage/></div> */}
      <HashRouter>
        <Routes>
          <Route path='/' element={<AllCocktailsPage/>} />
          <Route path='/test' element={<TestPage/>} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
/*       <DisplayLocations />
 */
    
  );
}

